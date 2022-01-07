import { initPage } from './base.js'
import { recipes } from './recipes.js'
export const form = document.getElementById('form')
export const input = document.getElementById('searchBar')
export const tags = {
  ustensils: [],
  appliance: [],
  ingredient: [],
}
export let page
export let sortedArray = Array.from(recipes)
// Selectionne l'input ingredient
export const ingredientInput = document.getElementById('ingredientInput')
export const appareilInput = document.getElementById('appareilInput')
export const ustensilsInput = document.getElementById('ustensilsInput')
// Selectionne tous les inputs
export const inputsTag = document.querySelectorAll('.tagInput')
//Récupère tous les ingrédients
export let allIngredients = []
for (let i = 0; i < recipes.length; i++) {
  for (let j = 0; j < recipes[i].ingredients.length; j++) {
    allIngredients.push(recipes[i].ingredients[j].ingredient)
  }
}
allIngredients = [...new Set(allIngredients)].sort()
// récupére tous les ustensiles
export let allUstensils = []
for (let i = 0; i < recipes.length; i++) {
  for (let j = 0; j < recipes[i].ustensils.length; j++) {
    allUstensils.push(recipes[i].ustensils[j])
  }
}
allUstensils = [...new Set(allUstensils)]
// récupère tous les appareils
export let allAppliance = [...new Set(recipes.map((x) => x.appliance))]
initPage()
