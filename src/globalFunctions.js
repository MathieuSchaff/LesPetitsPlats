// fonction qui permet de faire apparaitre la liste des items correspondant au focus de l'input selectionné
import { recipes } from './recipes.js'
import { createElement, m, patch } from './millionSeparated.js'
import { createEmptyPage, createPage } from './buildCooking.js'
import { createUlIngredient } from './buildList.js'
import { searchMainInput, triTagAll } from './algo2.js'
import { allAppliance, allIngredients, allUstensils } from './index.js'
import { addTagEventUstensils, addTagEventAppliance, addTagEventIngredient } from './addTagEvent.js'
import { page } from './index.js'
import { input } from './index.js'
import { tags } from './index.js'

export function inputFocus(type) {
  if (document.querySelector('.ulIngredients')) {
    removeUl()
  }
  // ajoute l'évenement sur le body => au click remove la liste
  document.body.addEventListener('mousedown', removeUl)
  switch (type) {
    case 'appareilInput':
      // Crée le ul avec les 30 premiers ingrédients et l'ajoute au dom
      let vnode1 = createUlIngredient(allAppliance)
      let applianceDom = createElement(vnode1)
      document.querySelector('.appareilList').insertAdjacentElement('afterbegin', applianceDom)
      // Au clique sur ul ou sur le bouton a nouveau, ne remove pas le ul ( stop propagation)
      applianceDom.addEventListener('mousedown', (e) => {
        e.stopPropagation()
      })

      // ajout d'un événement pour chaque li du UL
      // Chaque li va crée un bouton qui sera ajouté au dessus dans la div tagContainer
      addTagEventAppliance()
      break
    case 'ingredientInput':
      // Crée le ul avec les 30 premiers ingrédients et l'ajoute au dom
      let vnode2 = createUlIngredient(allIngredients.slice(0, 30))
      let ingredientsDom = createElement(vnode2)
      document.querySelector('.ingredientsList').insertAdjacentElement('afterbegin', ingredientsDom)
      // Au clique sur ul ou sur le bouton a nouveau, ne remove pas le ul ( stop propagation)

      // ajout d'un événement pour chaque li du UL
      // Chaque li va crée un bouton qui sera ajouté au dessus dans la div tagContainer
      addTagEventIngredient()
      break
    case 'ustensilsInput':
      // Crée le ul avec les 30 premiers ingrédients et l'ajoute au dom
      let vnode3 = createUlIngredient(allUstensils)
      let ustensilsDom = createElement(vnode3)
      document.querySelector('.ustensilsList').insertAdjacentElement('afterbegin', ustensilsDom)
      // Au clique sur ul ou sur le bouton a nouveau, ne remove pas le ul ( stop propagation)
      ustensilsDom.addEventListener('mousedown', (e) => {
        e.stopPropagation()
      })
      ustensilsInput.addEventListener('mousedown', (e) => {
        e.stopPropagation()
      })
      // ajout d'un événement pour chaque li du UL
      // Chaque li va crée un bouton qui sera ajouté au dessus dans la div tagContainer
      addTagEventUstensils()
      break
    default:
      break
  }
}
// Quand on tape dans un input , cela change la liste des items selectionnés et modifie le dom
export function inputChange(type) {
  switch (type) {
    case 'appareilInput':
      let appareilList = document.querySelector('.ulIngredients')
      const newAppliance = allAppliance.filter((appliance) => {
        return appliance.toLowerCase().includes(appareilInput.value.toLowerCase())
      })
      if (newAppliance.length === 0) {
        const vnode = m('ul', { className: 'ulIngredients' }, [
          m('li', { className: 'liIngredients' }, ["Pas d'ingrédients disponible"]),
        ])
        patch(appareilList, vnode)
      } else {
        const vnode = createUlIngredient(newAppliance)
        patch(appareilList, vnode)
        addTagEventAppliance()
      }

      break
    case 'ingredientInput':
      let ulIngredients = document.querySelector('.ulIngredients')
      const newIngredients = allIngredients
        .filter((ingredient) => {
          return ingredient.toLowerCase().includes(ingredientInput.value.toLowerCase())
        })
        .slice(0, 30)
      if (newIngredients.length === 0) {
        const vnode2 = m('ul', { className: 'ulIngredients' }, [
          m('li', { className: 'liIngredients' }, ["Pas d'ingrédients disponible"]),
        ])
        patch(ulIngredients, vnode2)
      }
      const vnode2 = createUlIngredient(newIngredients)
      patch(ulIngredients, vnode2)
      addTagEventIngredient()
      break
    case 'ustensilsInput':
      let ustensilsList = document.querySelector('.ulIngredients')
      const newUstensils = allUstensils.filter((ustensil) => {
        return ustensil.toLowerCase().includes(ustensilsInput.value.toLowerCase())
      })
      if (newUstensils.length === 0) {
        const vnode3 = m('ul', { className: 'ulIngredients' }, [
          m('li', { className: 'liIngredients' }, ["Pas d'ingrédients disponible"]),
        ])
        patch(ustensilsList, vnode3)
      } else {
        const vnode3 = createUlIngredient(newUstensils)
        patch(ustensilsList, vnode3)
        addTagEventUstensils()
      }
      break
    default:
      break
  }
}
// Remove the UL
export function removeUl() {
  document.querySelector('.ulIngredients').remove()
  document.body.removeEventListener('mousedown', removeUl)
}
export function updateDomWithTags() {
  let page = document.querySelector('.main-wrapper')
  // page = document.querySelector('.main-wrapper')
  let sortedArray = Array.from(recipes)
  if (input.value.length >= 0) {
    sortedArray = searchMainInput(sortedArray, input.value.toLowerCase())
  }
  sortedArray = triTagAll(sortedArray)
  if (sortedArray.length === 0) {
    let emptyPage = createEmptyPage()
    patch(page, emptyPage)
  } else {
    let newVnode = createPage(sortedArray)
    patch(page, newVnode)
  }
}
