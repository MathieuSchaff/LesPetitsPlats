const createElement = (vnode) => {
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode) // Catch if vnode is just text
  }

  const el = document.createElement(vnode.tag)
  if (vnode.props) {
    Object.entries(vnode.props).forEach(([name, value]) => {
      el[name] = value
    })
  }
  if (vnode.children) {
    vnode.children.forEach((child) => {
      el.appendChild(createElement(child))
    })
  }
  return el
}
const m = (tag, props, children) => ({
  tag,
  props,
  children,
})
const patch = (el, newVNode, oldVNode) => {
  if (!newVNode && newVNode !== '') return el.remove()
  if (typeof oldVNode === 'string' || typeof newVNode === 'string') {
    if (oldVNode !== newVNode) return el.replaceWith(createElement(newVNode))
  } else {
    //
    if (oldVNode?.tag !== newVNode.tag) {
      return el.replaceWith(createElement(newVNode))
    }

    if (oldVNode) {
      for (const propName in oldVNode.props) {
        if (oldVNode.props[propName] === newVNode.props[propName])
          return el.replaceWith(createElement(newVNode))
      }

      for (let i = el.childNodes.length - 1; i >= 0; i--) {
        patch(el.childNodes[i], newVNode.children[i], oldVNode.children[i])
      }
    }
  }
}
