//Renvoie une liste de recette en fonction du/des tag ingrédients selectionné.
// S'il n'y a pas de tag, renvoie la liste envoyé en paramètre
import { tags } from './index.js'
function triTagAppliance(array) {
  let newArray = array
  let sortedArray1 = []
  if (tags.appliance.length === 1) {
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].appliance === tags.appliance[0]) {
        sortedArray1.push(newArray[i])
      }
    }

    return sortedArray1
  } else if (tags.appliance.length === 0) {
    return newArray
  } else {
    return sortedArray1
  }
}
//Renvoie une liste de recette en fonction du/des tag ustensiles selectionné.
// S'il n'y a pas de tag, renvoie la liste envoyé en paramètre
function triTagUstensils(array) {
  let newArray = array
  let sortedArray1 = []
  if (tags.ustensils.length > 0) {
    for (let i = 0; i < newArray.length; i++) {
      let recipe = false
      for (let k = 0; k < tags.ustensils.length; k++) {
        if (newArray[i].ustensils.includes(tags.ustensils[k])) {
          recipe = true
        } else {
          recipe = false
        }
      }
      if (recipe) {
        sortedArray1.push(newArray[i])
        recipe = false
      }
    }
    return sortedArray1
  } else {
    return newArray
  }
}
//Renvoie une liste de recette en fonction du/des tags appareils selectionné.
// S'il n'y a pas de tag, renvoie la liste envoyé en paramètre
function triTagIngredients(array) {
  let sortedArray1 = []

  if (tags.ingredient.length > 0) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].ingredients.length; j++) {
        let recipe = false
        for (let k = 0; k < tags.ingredient.length; k++) {
          if (array[i].ingredients[j].ingredient.includes(tags.ingredient[k])) {
            recipe = true
          } else {
            recipe = false
          }
        }
        if (recipe) {
          sortedArray1.push(array[i])
          recipe = false
        }
      }
    }
    return sortedArray1
  } else {
    return array
  }
}
// Fonction qui va aller trier pour chaque tag la liste de recette à renvoyé
// Retourne la liste des recettes triés par toute les fonctions de tris des ustensiles, ingrédients et appareils ( appliance)
export function triTagAll(array) {
  let newArray = array
  newArray = triTagAppliance(newArray)
  newArray = triTagUstensils(newArray)
  newArray = triTagIngredients(newArray)
  return newArray
}
// Fonction de l'input principal qui va chercher dans le nom, la description, et les ingrédients s'il y a une correspondance avec la recherche effectué.
export function searchMainInput(meals, value) {
  let recipes2 = []
  // boucle sur tous les repas
  // si le nom ou la description du repas contient(inclus) la value passé en argument
  // alors ajoute ce repas a un nouveau tableau
  for (let i = 0; i < meals.length; i++) {
    if (
      meals[i].name.toLowerCase().includes(value) ||
      meals[i].description.toLowerCase().includes(value) ||
      meals[i].ingredients.filter((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(value)
      ).length > 0
    )
      recipes2.push(meals[i])
  }
  return recipes2
}
