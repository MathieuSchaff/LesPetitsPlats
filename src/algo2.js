function triTagIngredients(array) {
  // tri intregient
  let newArray = array.filter((recette) => {
    myIngredients = recette.ingredients.map((ingredient) => {
      return ingredient.ingredient;
    });
    return tags.ingredient.every((ingredient) =>
      myIngredients.includes(ingredient)
    );
  });
  return newArray;
}
function triTagUstensils(array) {
  array = array.filter((recette) => {
    return tags.ustensils.every((ustensil) =>
      recette.ustensils.includes(ustensil)
    );
  });
  return array;
}
function triTagAppliance(array) {
  let emptyArray = [];
  if (tags.appliance.length == 0) {
    return array;
  }
  if (tags.appliance.length > 1) {
    return emptyArray;
  }
  array = array.filter((recette) => {
    recette.appliance.includes(tags.appliance);
  });
  return array;
}
function triTagAll(array) {
  let newArray = array;
  newArray = triTagAppliance(newArray);
  console.log(newArray);
  newArray = triTagUstensils(newArray);
  console.log(newArray);
  newArray = triTagIngredients(newArray);
  console.log(newArray);
  return newArray;
}
function searchMainInput(meals, value) {
  meals = triTagAll(meals);
  meals = meals.filter((recette) => {
    return (
      recette.name.toLowerCase().includes(value) ||
      recette.description.toLowerCase().includes(value) ||
      meals[i].ingredients.filter((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(value)
      ).length > 0
    );
  });
  return meals;
}
