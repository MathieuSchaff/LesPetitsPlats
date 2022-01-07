// Fonction qui ajoute un tag quand on a cliqué sur un ustensils dans la liste des ustensiles dans le dropdown
function addTagEventUstensils() {
  // Selectionne le ul concerné, qui est apparue au focus
  let ulIngredients = document.querySelector('.ulIngredients')
  ulIngredients.addEventListener('mousedown', (e) => {
    e.stopPropagation()
  })
  // Selectionne tous les li
  ulIngredients.querySelectorAll('li').forEach((li) => {
    // Ajoute un événement au click sur chaque li qui n'a pas l'attribut data-foo
    if (!li.hasAttribute('data-foo')) {
      // initialise data-foo pour que chaque li ne soit pas cliquable plusieurs fois
      li.setAttribute('data-foo', 'bar')
      li.addEventListener('click', (e) => {
        if (tags.ustensils.includes(li.innerText)) {
          return
        }
        // Push le tag dans le tableau correspondant de l'objet tags
        tags.ustensils.push(e.target.innerText)
        // Ajoute une class qui display none le li cliqué
        // crée li et l'ajoute dans le tagContainer
        let span = document.createElement('button')
        span.value = e.target.innerText
        span.innerHTML = `${e.target.innerText}  <img class="crossTag" src="./images/crossTag.svg" alt="close">`
        span.classList.add('tag', 'tag-ustensils')
        document.querySelector('.tagContainer').insertAdjacentElement('beforeend', span)

        // Au moment du clic sur le li , si sortedArray est vide, on initialise sortedArray avec toutes les recettes
        updateDomWithTags()
        ustensilsInput.value = ''

        // a chaque clique sur le bouton ajouté grâce au clique sur le li,
        // on supprime le bouton et on supprime l'ingrédient de la liste
        span.addEventListener('click', (e) => {
          tags.ustensils = tags.ustensils.filter((x) => x !== span.innerText)
          span.remove()
          updateDomWithTags()
        })
        removeUl()
      })
    } else {
      return
    }
  })
}
// Fonction qui ajoute un tag quand on a cliqué sur un ustensils dans la liste des appareil dans le dropdown
function addTagEventAppliance() {
  // Selectionne le ul concerné, qui est apparue au focus
  let ulIngredients = document.querySelector('.ulIngredients')
  // Selectionne tous les li
  ulIngredients.addEventListener('mousedown', (e) => {
    e.stopPropagation()
  })
  ulIngredients.querySelectorAll('li').forEach((li) => {
    // Ajoute un événement au click sur chaque li qui n'a pas l'attribut data-foo
    if (!li.hasAttribute('data-foo')) {
      // initialise data-foo pour que chaque li ne soit pas cliquable plusieurs fois
      li.setAttribute('data-foo', 'bar')
      li.addEventListener('click', (e) => {
        if (tags.appliance.includes(li.innerText)) {
          return
        }
        // Push le tag dans le tableau correspondant de l'objet tags
        tags.appliance.push(e.target.innerText)
        // Ajoute une class qui display none le li cliqué

        // crée li et l'ajoute dans le tagContainer
        let span = document.createElement('button')
        span.value = e.target.innerText
        span.innerHTML = `${e.target.innerText}  <img class="crossTag" src="./images/crossTag.svg" alt="close">`
        span.classList.add('tag', 'tag-appliance')
        document.querySelector('.tagContainer').insertAdjacentElement('beforeend', span)

        // Au moment du clic sur le li , si sortedArray est vide, on initialise sortedArray avec toutes les recettes
        updateDomWithTags()
        appareilInput.value = ''

        // a chaque clique sur le bouton ajouté grâce au clique sur le li,
        // on supprime le bouton et on supprime l'ingrédient de la liste
        span.addEventListener('click', (e) => {
          tags.appliance = tags.appliance.filter((el) => el !== span.innerText)
          span.remove()
          updateDomWithTags()
        })
        removeUl()
      })
    } else {
      return
    }
  })
}
// Fonction qui ajoute un tag quand on a cliqué sur un ustensils dans la liste des ingrédients dans le dropdown
function addTagEventIngredient() {
  // Selectionne le ul concerné, qui est apparue au focus
  let ingredientsDom = document.querySelector('.ulIngredients')

  // Au clique sur ul ou sur le bouton a nouveau, ne remove pas le ul ( stop propagation)
  ingredientsDom.addEventListener('mousedown', (e) => {
    e.stopPropagation()
  })
  // Selectionne tous les li
  ingredientsDom.querySelectorAll('li').forEach((li) => {
    // Ajoute un événement au click sur chaque li qui n'a pas l'attribut data-foo
    if (!li.hasAttribute('data-foo')) {
      // initialise data-foo pour que chaque li ne soit pas cliquable plusieurs fois
      li.setAttribute('data-foo', 'bar')
      li.addEventListener('click', (e) => {
        if (tags.ingredient.includes(li.innerText)) {
          return
        }
        // Push le tag dans le tableau correspondant de l'objet tags
        tags.ingredient.push(e.target.innerText)
        // Ajoute une class qui display none le li cliqué

        // crée li et l'ajoute dans le tagContainer
        let span = document.createElement('button')
        span.value = e.target.innerText
        span.innerHTML = `${e.target.innerText}  <img class="crossTag" src="./images/crossTag.svg" alt="close">`
        span.classList.add('tag', 'tag-ingredients')
        document.querySelector('.tagContainer').insertAdjacentElement('beforeend', span)

        // Au moment du clic sur le li , si sortedArray est vide, on initialise sortedArray avec toutes les recettes

        updateDomWithTags()
        ingredientInput.value = ''

        // a chaque clique sur le bouton ajouté grâce au clique sur le li,
        // on supprime le bouton et on supprime l'ingrédient de la liste
        span.addEventListener('click', (e) => {
          tags.ingredient = tags.ingredient.filter((el) => el !== span.innerText)
          span.remove()
          updateDomWithTags()
        })
        removeUl()
      })
    } else {
      return
    }
  })
}
