import { m } from './millionSeparated.js'
function createsLiIngredient(li) {
  const vnode = m('li', { className: 'liIngredients' }, [li])

  return vnode
}
// Permet de créer la liste des ingrédients de tous les dropdown en fonction du dropdown selectionné /ou du tri effectué sur l'input du dropdown en question
export function createUlIngredient(arrayOfLi) {
  const vnode = m(
    'ul',
    { className: 'ulIngredients' },
    arrayOfLi.map((meals) => createsLiIngredient(meals))
  )
  return vnode
}
