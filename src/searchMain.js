// Fonction principale de l'input principale
// renvoie une liste de recette en fonction de la saisie de l'utilisateur ( voir base.js)
function simpleResearch(value) {
  if (
    !(tags.ingredient.length === 0 && tags.ustensils.length === 0 && tags.appliance.length === 0)
  ) {
    sortedArray = triTagAll(sortedArray)
    sortedArray = searchMainInput(sortedArray, value.toLowerCase())
  } else {
    sortedArray = searchMainInput(sortedArray, value.toLowerCase())
  }

  return sortedArray
}
