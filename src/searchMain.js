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
