function createTitle(name) {
  const vnode = m("h3", { className: "recipe-title" }, [name]);
  return vnode;
}
function createTime(time) {
  const vnode = m("p", { className: "recipe-time" }, [
    {
      tag: "img",
      props: { src: "./images/time.svg" },
    },
    `${time} min`,
  ]);
  return vnode;
}

function createIngredients(li) {
  const vnode = m("ul", { className: "recipe-list" }, li);
  return vnode;
}
function createIngredient(a) {
  const vnode = m("span", { className: "bold" }, [`${a}`]);
  return vnode;
}
function createQuantity(a) {
  const vnode = m("span", { className: "tarzan" }, [`: ${a}`]);
  return vnode;
}
function createUnit(a) {
  if (a === "cuillères à soupe") {
    a = "cuillères";
  }
  if (a === "grammes") {
    a = "g";
  }
  const vnode = m("span", { className: "zoro" }, [`${a}`]);
  return vnode;
}
function createDescription(howtodo) {
  const vnode = m(
    "p",
    {
      className: "recipe-howtodo",
    },
    [howtodo]
  );

  return vnode;
}
function createLi1(ingredient, quantity, unit) {
  const vnode = m(
    "li",

    undefined,
    [createIngredient(ingredient), createQuantity(quantity), createUnit(unit)]
  );
  return vnode;
}
function createLi2(ingredient, quantity) {
  const vnode = m("li", undefined, [
    createIngredient(ingredient),
    createQuantity(quantity),
  ]);
  return vnode;
}
function createLi3(ingredient) {
  const vnode = m(
    "li",
    {
      className: "bold",
    },
    [createIngredient(ingredient)]
  );
  return vnode;
}

function createPage(recipes2) {
  let recipesDisplay = recipes2;
  const vnode = m(
    "div",
    { className: "main-wrapper" },
    recipesDisplay.map((recipe) => {
      let ingredients = recipe.ingredients.map((x) => {
        let lis;
        if (x.ingredient && x.quantity && x.unit) {
          lis = createLi1(x.ingredient, x.quantity, x.unit);
        }
        if (x.ingredient && x.quantity && x.unit === undefined) {
          lis = createLi2(x.ingredient, x.quantity);
        }
        if (x.ingredient && x.quantity === undefined && x.unit === undefined) {
          lis = createLi3(x.ingredient);
        }
        return lis;
      });

      return m("article", { className: "recipe-card" }, [
        m(
          "div",
          {
            className: "recipe-first",
          },
          [createTitle(recipe.name), createTime(recipe.time)]
        ),
        m("div", { className: "recipe-sec" }, [
          // Je veux que create ingredients me retourne un objet , avec comme enfants une liste de li

          createIngredients(ingredients),
          createDescription(recipe.description),
        ]),
      ]);
    })
  );
  return vnode;
}
function createEmptyPage() {
  const vnode = m("div", { className: "main-wrapper" }, [""]);
  return vnode;
}
