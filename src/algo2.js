//Renvoie une liste de recette en fonction du/des tag ingrédients selectionné.
// S'il n'y a pas de tag, renvoie la liste envoyé en paramètre
import { tags } from './index.js'
// import {
//   myIngredient,

// }
function triTagIngredients(array) {
  // tri intregient
  let newArray = array.filter((recette) => {
    let myIngredients = recette.ingredients.map((ingredient) => {
      return ingredient.ingredient
    })
    return tags.ingredient.every((ingredient) => {
      return myIngredients.some((myIngredient) => {
        return myIngredient.startsWith(ingredient)
      })
    })
  })
  return newArray
}
//Renvoie une liste de recette en fonction du/des tag ustensiles selectionné.
// S'il n'y a pas de tag, renvoie la liste envoyé en paramètre
function triTagUstensils(array) {
  array = array.filter((recette) => {
    return tags.ustensils.every((ustensil) => recette.ustensils.includes(ustensil))
  })
  return array
}
//Renvoie une liste de recette en fonction du/des tags appareils selectionné.
// S'il n'y a pas de tag, renvoie la liste envoyé en paramètre
function triTagAppliance(array) {
  let emptyArray = []
  if (tags.appliance.length === 0) {
    return array
  }
  if (tags.appliance.length >= 1) {
    emptyArray = array.filter((recette) => {
      return recette.appliance.includes(tags.appliance)
    })
  }
  return emptyArray
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
  let meals1 = meals.filter((recette) => {
    return (
      recette.name.toLowerCase().includes(value) ||
      recette.description.toLowerCase().includes(value) ||
      recette.ingredients.filter((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(value)
      ).length > 0
    )
  })
  return meals1
}
