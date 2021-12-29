// Renvoie Vnode des ingrédients/ appliance / ustensils

//Récupère tous les ingrédients
let allIngredients = [];
for (let i = 0; i < recipes.length; i++) {
  for (let j = 0; j < recipes[i].ingredients.length; j++) {
    allIngredients.push(recipes[i].ingredients[j].ingredient);
  }
}
allIngredients = [...new Set(allIngredients)].sort();

ingredientInput.addEventListener("input", (e) => {
  inputChange(e.target.id);
});

// Au focus
ingredientInput.addEventListener("focus", (e) => {
  inputFocus(e.target.id);
});
function addTagEvent() {
  // Selectionne le ul concerné, qui est apparue au focus
  let ingredientsDom = document.querySelector(".ulIngredients");
  // Selectionne tous les li
  ingredientsDom.querySelectorAll("li").forEach((x) => {
    // Ajoute un événement au click sur chaque li qui n'a pas l'attribut data-foo
    if (!x.hasAttribute("data-foo")) {
      // initialise data-foo pour que chaque li ne soit pas cliquable plusieurs fois
      x.setAttribute("data-foo", "bar");
      x.addEventListener("click", (e) => {
        if (tags.ingredient.includes(x.innerText)) {
          return;
        }
        // Push le tag dans le tableau correspondant de l'objet tags
        tags.ingredient.push(e.target.innerText);
        // Ajoute une class qui display none le li cliqué

        // crée li et l'ajoute dans le tagContainer
        let span = document.createElement("button");
        span.value = e.target.innerText;
        span.innerText = e.target.innerText;
        span.className = "tag";
        document
          .querySelector(".tagContainer")
          .insertAdjacentElement("beforeend", span);

        // Au moment du clic sur le li , si sortedArray est vide, on initialise sortedArray avec toutes les recettes

        updateDomWithTags();
        ingredientInput.value = "";

        // a chaque clique sur le bouton ajouté grâce au clique sur le li,
        // on supprime le bouton et on supprime l'ingrédient de la liste
        span.addEventListener("click", (e) => {
          tags.ingredient = tags.ingredient.filter((x) => x !== span.innerText);
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
