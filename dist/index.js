/**
 * Diffs two VNode props and modifies the DOM node based on the necessary changes
 */
const propsDriver = (el, newVNode, oldVNode, workStack = []) => {
  const oldProps = oldVNode?.props ?? {};
  const newProps = newVNode.props ?? {};
  // Subsequent spreads will overwrite original spreads
  // e.g. { ...{ foo: 'bar' }, ...{ foo: 'baz' } } becomes { foo: 'baz' }
  for (const propName in { ...oldProps, ...newProps }) {
    const oldPropValue = oldProps[propName];
    const newPropValue = newProps[propName];
    if (oldPropValue === newPropValue) continue;
    if (propName.startsWith("on")) {
      const eventPropName = propName.slice(2).toLowerCase();
      workStack.push(() => {
        if (oldPropValue) el.removeEventListener(eventPropName, oldPropValue);
        el.addEventListener(eventPropName, newPropValue);
      });
    } else if (el[propName] !== undefined && !(el instanceof SVGElement)) {
      if (newPropValue) {
        workStack.push(() => (el[propName] = newPropValue));
      } else {
        workStack.push(() => {
          el.removeAttribute(propName);
          delete el[propName];
        });
      }
    } else if (!newPropValue) {
      workStack.push(() => el.removeAttribute(propName));
    } else {
      workStack.push(() => el.setAttribute(propName, String(newPropValue)));
    }
  }
  return workStack;
};

/**
 * Field on DOM node that stores the previous VNode
 */
const OLD_VNODE_FIELD = "__m_old_vnode";
var VFlags;
(function (VFlags) {
  VFlags[(VFlags["NO_CHILDREN"] = 0)] = "NO_CHILDREN";
  VFlags[(VFlags["ONLY_TEXT_CHILDREN"] = 1)] = "ONLY_TEXT_CHILDREN";
  VFlags[(VFlags["ONLY_KEYED_CHILDREN"] = 2)] = "ONLY_KEYED_CHILDREN";
  VFlags[(VFlags["ANY_CHILDREN"] = 3)] = "ANY_CHILDREN";
})(VFlags || (VFlags = {}));

/**
 * Diffs two VNode children and modifies the DOM node based on the necessary changes
 */
const childrenDriver = (el, newVNode, oldVNode, workStack = []) => {
  const oldVNodeChildren = oldVNode?.children ?? [];
  const newVNodeChildren = newVNode.children;
  const delta = newVNode.delta;
  // Deltas are a way for the compile-time to optimize runtime operations
  // by providing a set of predefined operations. This is useful for cases
  // where you are performing consistent, predictable operations at a high
  // interval, low payload situation.
  if (delta) {
    for (let i = 0; i < delta.length; ++i) {
      const [deltaType, deltaPosition] = delta[i];
      const child = el.childNodes[deltaPosition];
      switch (deltaType) {
        case 0 /* INSERT */:
          workStack.push(() =>
            el.insertBefore(
              createElement(newVNodeChildren[deltaPosition]),
              child
            )
          );
          break;
        case 1 /* UPDATE */:
          patch(
            child,
            newVNodeChildren[deltaPosition],
            oldVNodeChildren[deltaPosition],
            workStack
          );
          break;
        case 2 /* DELETE */:
          workStack.push(() => el.removeChild(child));
          break;
      }
    }
    return workStack;
  }
  // Flags allow for greater optimizability by reducing condition branches.
  // Generally, you should use a compiler to generate these flags, but
  // hand-writing them is also possible
  if (!newVNodeChildren || newVNode.flag === VFlags.NO_CHILDREN) {
    if (!oldVNodeChildren) return workStack;
    workStack.push(() => (el.textContent = ""));
    return workStack;
  }
  if (newVNode.flag === undefined || newVNode.flag === VFlags.ANY_CHILDREN) {
    if (oldVNodeChildren) {
      // Interates backwards, so in case a childNode is destroyed, it will not shift the nodes
      // and break accessing by index
      for (let i = oldVNodeChildren.length - 1; i >= 0; --i) {
        patch(
          el.childNodes[i],
          newVNodeChildren[i],
          oldVNodeChildren[i],
          workStack
        );
      }
    }
    for (
      let i = oldVNodeChildren.length ?? 0;
      i < newVNodeChildren.length ?? 0;
      ++i
    ) {
      const node = createElement(newVNodeChildren[i], false);
      workStack.push(() => el.appendChild(node));
    }
    return workStack;
  }
  if (newVNode.flag === VFlags.ONLY_TEXT_CHILDREN) {
    workStack.push(() => (el.textContent = newVNode.children.join("")));
    return workStack;
  }
  if (newVNode.flag === VFlags.ONLY_KEYED_CHILDREN) {
    let oldHead = 0;
    let newHead = 0;
    let oldTail = oldVNodeChildren.length - 1;
    let newTail = newVNodeChildren.length - 1;
    // Constrain tails to dirty vnodes: [X, A, B, C], [Y, A, B, C] -> [X], [Y]
    while (oldHead <= oldTail && newHead <= newTail) {
      if (oldVNodeChildren[oldTail].key !== newVNodeChildren[newTail].key) {
        break;
      }
      oldTail--;
      newTail--;
    }
    // Constrain heads to dirty vnodes: [A, B, C, X], [A, B, C, Y] -> [X], [Y]
    while (oldHead <= oldTail && newHead <= newTail) {
      if (oldVNodeChildren[oldHead].key !== newVNodeChildren[newHead].key) {
        break;
      }
      oldHead++;
      newHead++;
    }
    if (oldHead > oldTail) {
      // There are no dirty old children: [], [X, Y, Z]
      while (newHead <= newTail) {
        const newHeadIndex = newHead++;
        workStack.push(() =>
          el.insertBefore(
            createElement(newVNodeChildren[newHeadIndex], false),
            el.childNodes[newHeadIndex]
          )
        );
      }
    } else if (newHead > newTail) {
      // There are no dirty new children: [X, Y, Z], []
      while (oldHead <= oldTail) {
        const node = el.childNodes[oldHead++];
        workStack.push(() => el.removeChild(node));
      }
    } else {
      const oldKeyMap = {};
      for (let i = oldTail; i >= oldHead; --i) {
        oldKeyMap[oldVNodeChildren[i].key] = i;
      }
      while (newHead <= newTail) {
        const newVNodeChild = newVNodeChildren[newHead];
        const oldVNodePosition = oldKeyMap[newVNodeChild.key];
        const node = el.childNodes[oldVNodePosition];
        const newPosition = newHead++;
        if (
          oldVNodePosition !== undefined &&
          newVNodeChild.key === oldVNodeChildren[oldVNodePosition].key
        ) {
          if (newPosition !== oldVNodePosition) {
            // Determine move for child that moved: [X, A, B, C] -> [A, B, C, X]
            workStack.push(() =>
              el.insertBefore(node, el.childNodes[newPosition])
            );
          }
          delete oldKeyMap[newVNodeChild.key];
        } else {
          // VNode doesn't exist yet: [] -> [X]
          workStack.push(() =>
            el.insertBefore(
              createElement(newVNodeChild, false),
              el.childNodes[newPosition]
            )
          );
        }
      }
      for (const oldVNodePosition of Object.values(oldKeyMap)) {
        // VNode wasn't found in new vnodes, so it's cleaned up: [X] -> []
        const node = el.childNodes[oldVNodePosition];
        workStack.push(() => el.removeChild(node));
      }
    }
    return workStack;
  }
  return workStack;
};

/**
 * Passes all of the tasks in a given array to a given callback function sequentially.
 * Generally, this is used to call the functions, with an optional modifier
 */
const flushWorkStack = (workStack, commit = (task) => task()) => {
  for (let i = 0; i < workStack.length; ++i) commit(workStack[i]);
};
/**
 * Creates a custom patch function
 */
const compose =
  (drivers) =>
  (el, newVNode, prevVNode, workStack = [], commit) => {
    const finish = (element) => {
      workStack.push(() => {
        if (!prevVNode) element[OLD_VNODE_FIELD] = newVNode;
      });
      flushWorkStack(workStack, commit);
      return element;
    };
    if (!newVNode && newVNode !== "") {
      workStack.push(() => el.remove());
      return finish(el);
    } else {
      const oldVNode = prevVNode ?? el[OLD_VNODE_FIELD];
      const hasString =
        typeof oldVNode === "string" || typeof newVNode === "string";
      if (hasString && oldVNode !== newVNode) {
        const newEl = createElement(newVNode);
        workStack.push(() => el.replaceWith(newEl));
        return finish(newEl);
      }
      if (!hasString) {
        const oldVElement = oldVNode;
        const newVElement = newVNode;
        if (oldVElement?.props?.ignore || newVElement?.props?.ignore) return el;
        if (
          (oldVElement?.key === undefined && newVElement?.key === undefined) ||
          oldVElement?.key !== newVElement?.key
        ) {
          if (oldVElement?.tag !== newVElement?.tag || el instanceof Text) {
            const newEl = createElement(newVNode);
            workStack.push(() => el.replaceWith(newEl));
            return finish(newEl);
          }
          if (drivers) {
            for (let i = 0; i < drivers.length; ++i) {
              drivers[i](el, newVElement, oldVElement, workStack);
            }
          }
        }
      }
    }
    return finish(el);
  };
/**
 * Diffs two VNodes and modifies the DOM node based on the necessary changes
 */
const patch = compose([childrenDriver, propsDriver]);

/**
 * Creates an Element from a VNode
 */
const createElement = (vnode, attachField = true) => {
  if (typeof vnode === "string") return document.createTextNode(vnode);
  const el = vnode.props?.ns
    ? document.createElementNS(vnode.props?.ns, vnode.tag)
    : document.createElement(vnode.tag);
  flushWorkStack(propsDriver(el, vnode));
  if (vnode.children) {
    for (let i = 0; i < vnode.children.length; ++i) {
      el.appendChild(createElement(vnode.children[i]));
    }
  }
  if (attachField) el[OLD_VNODE_FIELD] = vnode;
  return el;
};
/**
 * Helper method for creating a VNode
 */
const m = (tag, props, children, flag, delta) => {
  let key;
  if (props?.key) {
    key = props.key;
    delete props.key;
  }
  return {
    tag,
    props,
    children,
    key,
    flag,
    delta,
  };
};
