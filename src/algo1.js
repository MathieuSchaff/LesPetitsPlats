function triTagAppliance(array) {
  let newArray = array;
  let sortedArray1 = [];
  if (tags.appliance.length === 1) {
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].appliance === tags.appliance[0]) {
        sortedArray1.push(newArray[i]);
      }
    }

    return sortedArray1;
  } else if (tags.appliance.length === 0) {
    return newArray;
  } else {
    return sortedArray1;
  }
}

function triTagUstensils(array) {
  let newArray = array;
  let sortedArray1 = [];
  if (tags.ustensils.length > 0) {
    for (let i = 0; i < newArray.length; i++) {
      let recipe = false;
      for (let k = 0; k < tags.ustensils.length; k++) {
        if (newArray[i].ustensils.includes(tags.ustensils[k])) {
          recipe = true;
        } else {
          recipe = false;
        }
      }
      if (recipe) {
        sortedArray1.push(newArray[i]);
        recipe = false;
      }
    }
    return sortedArray1;
  } else {
    return newArray;
  }
}
function triTagIngredients(array) {
  let sortedArray1 = [];

  if (tags.ingredient.length > 0) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].ingredients.length; j++) {
        let recipe = false;
        for (let k = 0; k < tags.ingredient.length; k++) {
          if (array[i].ingredients[j].ingredient.includes(tags.ingredient[k])) {
            recipe = true;
          } else {
            recipe = false;
          }
        }
        if (recipe) {
          sortedArray1.push(array[i]);
          recipe = false;
        }
      }
    }
    return sortedArray1;
  } else {
    return array;
  }
}

function triTagAll(array) {
  let newArray = array;
  newArray = triTagAppliance(newArray);
  newArray = triTagUstensils(newArray);
  newArray = triTagIngredients(newArray);
  return newArray;
}

function searchMainInput(meals, value) {
  let recipes2 = [];
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
      recipes2.push(meals[i]);
  }
  return recipes2;
}
