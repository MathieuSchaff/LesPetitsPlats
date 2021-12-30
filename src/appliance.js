//Récupère tous les appliance
let allAppliance = [...new Set(recipes.map((x) => x.appliance))];

// Appliance
function searchAppliance(recipe, appliance) {
  let newArray = [];
  newArray = recipe.filter((x) => x.appliance === appliance);
  return newArray;
}

appareilInput.addEventListener("input", (e) => {
  inputChange(e.target.id);
});

// Au focus
appareilInput.addEventListener("focus", (e) => {
  inputFocus(e.target.id);
});

// Ajoute un événement blur ( quand on quitte le input) =>
appareilInput.addEventListener("blur", (e) => {
  e.target.value = "";
});
function addTagEventAppliance() {
  // Selectionne le ul concerné, qui est apparue au focus
  let ulIngredients = document.querySelector(".ulIngredients");
  // Selectionne tous les li
  ulIngredients.querySelectorAll("li").forEach((x) => {
    // Ajoute un événement au click sur chaque li qui n'a pas l'attribut data-foo
    if (!x.hasAttribute("data-foo")) {
      // initialise data-foo pour que chaque li ne soit pas cliquable plusieurs fois
      x.setAttribute("data-foo", "bar");
      x.addEventListener("click", (e) => {
        if (tags.appliance.includes(x.innerText)) {
          return;
        }
        // Push le tag dans le tableau correspondant de l'objet tags
        tags.appliance.push(e.target.innerText);
        // Ajoute une class qui display none le li cliqué

        // crée li et l'ajoute dans le tagContainer
        let span = document.createElement("button");
        span.value = e.target.innerText;
        span.innerText = e.target.innerText;
        span.className = "tag tag-appliance";
        document
          .querySelector(".tagContainer")
          .insertAdjacentElement("beforeend", span);

        // Au moment du clic sur le li , si sortedArray est vide, on initialise sortedArray avec toutes les recettes
        updateDomWithTags();
        appareilInput.value = "";

        // a chaque clique sur le bouton ajouté grâce au clique sur le li,
        // on supprime le bouton et on supprime l'ingrédient de la liste
        span.addEventListener("click", (e) => {
          tags.appliance = tags.appliance.filter((x) => x !== span.innerText);
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
