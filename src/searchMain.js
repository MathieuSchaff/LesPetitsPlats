// Fonction principale de l'input principale
// renvoie une liste de recette en fonction de la saisie de l'utilisateur ( voir base.js)
import { triTagAll, searchMainInput } from './algo2.js'
import { tags } from './index.js'
import { recipes } from './recipes.js'
export function simpleResearch(value) {
  console.time('triTagAll/ALGO2')
  let sortedArray = Array.from(recipes)
  if (
    !(tags.ingredient.length === 0 && tags.ustensils.length === 0 && tags.appliance.length === 0)
  ) {
    sortedArray = triTagAll(sortedArray)
    sortedArray = searchMainInput(sortedArray, value.toLowerCase())
  } else {
    sortedArray = searchMainInput(sortedArray, value.toLowerCase())
  }
  console.timeEnd('triTagAll/ALGO2')
  return sortedArray
}
