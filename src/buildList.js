function createsLiIngredient(li) {
  const vnode = m('li', { className: 'liIngredients' }, [li])

  return vnode
}
function createUlIngredient(arrayOfLi) {
  const vnode = m(
    'ul',
    { className: 'ulIngredients' },
    arrayOfLi.map((meals) => createsLiIngredient(meals))
  )
  return vnode
}
