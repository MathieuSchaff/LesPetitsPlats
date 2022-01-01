//Récupère tous les ustensiles
let allUstensils = [];
for (let i = 0; i < recipes.length; i++) {
  for (let j = 0; j < recipes[i].ustensils.length; j++) {
    allUstensils.push(recipes[i].ustensils[j]);
  }
}
allUstensils = [...new Set(allUstensils)];

// Appliance
function searchUstensils(recipe, ustensils) {
  let newArray = [];
  newArray = recipe.filter((item) => item.ustensils.includes(ustensils));
  return newArray;
}

ustensilsInput.addEventListener("input", (e) => {
  inputChange(e.target.id);
});

// Au focus
ustensilsInput.addEventListener("focus", (e) => {
  inputFocus(e.target.id);
});

// // Ajoute un événement blur ( quand on quitte le input) =>
ustensilsInput.addEventListener("blur", (e) => {
  e.target.value = "";
});

function addTagEventUstensils() {
  // Selectionne le ul concerné, qui est apparue au focus
  let ulIngredients = document.querySelector(".ulIngredients");
  // Selectionne tous les li
  ulIngredients.querySelectorAll("li").forEach((li) => {
    // Ajoute un événement au click sur chaque li qui n'a pas l'attribut data-foo
    if (!li.hasAttribute("data-foo")) {
      // initialise data-foo pour que chaque li ne soit pas cliquable plusieurs fois
      li.setAttribute("data-foo", "bar");
      li.addEventListener("click", (e) => {
        if (tags.ustensils.includes(li.innerText)) {
          return;
        }
        // Push le tag dans le tableau correspondant de l'objet tags
        tags.ustensils.push(e.target.innerText);
        // Ajoute une class qui display none le li cliqué
        // crée li et l'ajoute dans le tagContainer
        let span = document.createElement("button");
        span.value = e.target.innerText;
        span.innerHTML = `${e.target.innerText}  <img class="crossTag" src="./images/crossTag.svg" alt="close">`;
        span.classList.add("tag", "tag-ustensils");
        document
          .querySelector(".tagContainer")
          .insertAdjacentElement("beforeend", span);

        // Au moment du clic sur le li , si sortedArray est vide, on initialise sortedArray avec toutes les recettes
        updateDomWithTags();
        ustensilsInput.value = "";

        // a chaque clique sur le bouton ajouté grâce au clique sur le li,
        // on supprime le bouton et on supprime l'ingrédient de la liste
        span.addEventListener("click", (e) => {
          tags.ustensils = tags.ustensils.filter((x) => x !== span.innerText);
          span.remove();
          updateDomWithTags();
        });
        removeUl();
      });
    } else {
      return;
    }
  });
}
