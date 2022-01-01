const form = document.getElementById("form");

let meals = [];
const input = document.getElementById("searchBar");
const tags = {
  ustensils: [],
  appliance: [],
  ingredient: [],
};
let page;
let sortedArray = Array.from(recipes);
function initPage() {
  const vnode = createPage(sortedArray);
  page = createElement(vnode);
  document.querySelector(".body").insertAdjacentElement("beforeend", page);
}
initPage();
// Selectionne l'input ingredient
const ingredientInput = document.getElementById("ingredientInput");
const appareilInput = document.getElementById("appareilInput");
const ustensilsInput = document.getElementById("ustensilsInput");
// Selectionne tous les inputs
const inputsTag = document.querySelectorAll(".tagInput");

function simpleResearch(value) {
  if (
    !(
      tags.ingredient.length === 0 &&
      tags.ustensils.length === 0 &&
      tags.appliance.length === 0
    )
  ) {
    sortedArray = triTagAll(sortedArray);
    sortedArray = searchMainInput(sortedArray, value.toLowerCase());
  } else {
    sortedArray = searchMainInput(sortedArray, value.toLowerCase());
  }

  return sortedArray;
}

input.addEventListener("input", (e) => {
  // Si l'input de recherche principal est supérieur ou égal à 3 caractère
  // alors va essayer de matcher avec
  sortedArray = Array.from(recipes);
  page = document.querySelector(".main-wrapper");
  if (e.target.value.length >= 3) {
    sortedArray = simpleResearch(e.target.value);
    if (sortedArray.length > 0) {
      let vnode = createPage(sortedArray);
      patch(page, vnode);
    } else {
      patch(page, createEmptyPage());
    }
  } else {
    sortedArray = triTagAll(sortedArray);
    patch(page, createPage(sortedArray));
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
