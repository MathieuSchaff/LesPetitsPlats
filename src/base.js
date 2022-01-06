const form = document.getElementById('form')
let meals = []
const input = document.getElementById('searchBar')
console.log(input)
const tags = {
  ustensils: [],
  appliance: [],
  ingredient: [],
}
let page
let sortedArray = Array.from(recipes)
// Selectionne l'input ingredient
const ingredientInput = document.getElementById('ingredientInput')
const appareilInput = document.getElementById('appareilInput')
const ustensilsInput = document.getElementById('ustensilsInput')
// Selectionne tous les inputs
const inputsTag = document.querySelectorAll('.tagInput')
//Récupère tous les ingrédients
let allIngredients = []
for (let i = 0; i < recipes.length; i++) {
  for (let j = 0; j < recipes[i].ingredients.length; j++) {
    allIngredients.push(recipes[i].ingredients[j].ingredient)
  }
}
allIngredients = [...new Set(allIngredients)].sort()
// récupére tous les ustensiles
let allUstensils = []
for (let i = 0; i < recipes.length; i++) {
  for (let j = 0; j < recipes[i].ustensils.length; j++) {
    allUstensils.push(recipes[i].ustensils[j])
  }
}
allUstensils = [...new Set(allUstensils)]
// récupère tous les appareils
let allAppliance = [...new Set(recipes.map((x) => x.appliance))]
// initialise la page en créant les recettes à partir de la liste des recettes , et ajoute pour chaque input un événement adéquat
function initPage() {
  const input = document.getElementById('searchBar')
  const vnode = createPage(sortedArray)
  page = createElement(vnode)
  document.querySelector('.body').insertAdjacentElement('beforeend', page)
  // Ajout de l'évenement stop propagation sur les inputs
  ingredientInput.addEventListener('mousedown', (e) => {
    e.stopPropagation()
  })
  appareilInput.addEventListener('mousedown', (e) => {
    e.stopPropagation()
  })
  ustensilsInput.addEventListener('mousedown', (e) => {
    e.stopPropagation()
  })
  // Au focus de l'input
  appareilInput.addEventListener('focus', (e) => {
    inputFocus(e.target.id)
  })
  ingredientInput.addEventListener('focus', (e) => {
    inputFocus(e.target.id)
  })
  ustensilsInput.addEventListener('focus', (e) => {
    inputFocus(e.target.id)
  })

  // Changement de valeur de l'input
  appareilInput.addEventListener('input', (e) => {
    inputChange(e.target.id)
  })
  ustensilsInput.addEventListener('input', (e) => {
    inputChange(e.target.id)
  })
  ingredientInput.addEventListener('input', (e) => {
    inputChange(e.target.id)
  })

  // Ajoute un événement blur ( quand on quitte le input) => remet la valeur de l'input à vide
  appareilInput.addEventListener('blur', (e) => {
    e.target.value = ''
  })

  ustensilsInput.addEventListener('blur', (e) => {
    e.target.value = ''
  })

  ingredientInput.addEventListener('blur', (e) => {
    e.target.value = ''
  })

  // Ajout d'un événement click sur l'input principal
  input.addEventListener('input', (e) => {
    // Si l'input de recherche principal est supérieur ou égal à 3 caractère
    // alors va essayer de matcher avec
    sortedArray = Array.from(recipes)
    page = document.querySelector('.main-wrapper')

    if (e.target.value.length >= 3) {
      sortedArray = simpleResearch(e.target.value)
      if (sortedArray.length > 0) {
        let vnode = createPage(sortedArray)
        patch(page, vnode)
      } else {
        let emptyPage = createEmptyPage()
        patch(page, emptyPage)
      }
    } else {
      sortedArray = triTagAll(sortedArray)
      patch(page, createPage(sortedArray))
    }
  })
  // arrête l'évenement sur le formualaire
  form.addEventListener('submit', (e) => {
    e.preventDefault()
  })
}
initPage()
