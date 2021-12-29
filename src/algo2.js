function triTagIngredients(array) {
  // tri intregient
  let newArray = array.filter((recette) => {
    myIngredients = recette.ingredients.map((ingredient) => {
      return ingredient.ingredient;
    });
    return tags.ingredient.every((ingredient) =>
      // myIngredients.includes(ingredient)
      {
        return myIngredients.some((myIngredient) => {
          return myIngredient.startsWith(ingredient);
        });
      }
    );
  });

  // some et start with
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
  newArray = triTagUstensils(newArray);
  newArray = triTagIngredients(newArray);
  return newArray;
}
function searchMainInput(meals, value) {
  let meals1 = meals.filter((recette) => {
    return (
      recette.name.toLowerCase().includes(value) ||
      recette.description.toLowerCase().includes(value) ||
      recette.ingredients.filter((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(value)
      ).length > 0
    );
  });
  return meals1;
}
