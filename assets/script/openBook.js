import {switchDisplay, showElements} from "./elemsDisplay.js";
import {storage} from "./localStorage.js"


const contentBlock = document.getElementsByClassName('main-content-wrapper')[0].children
const content = document.getElementsByClassName('main-content-wrapper')[0]
const button = document.getElementsByClassName('main-button')[0]
const cover = document.getElementsByClassName('main-content-cover-wrapper')[0]
const edit = document.getElementsByClassName('main-content-edit')[0]

export function openBook(e) {
  if (Object.keys(storage).length === 0) {
    localStorage.setItem('current', '')
    return cover.style = 'visibility:hidden'
  } else {
    localStorage.setItem('current', 'item0')
  }
  cover.style = 'visibility:show'

  if (e) localStorage.setItem('current', e.target.parentElement.parentElement.id)

  if (localStorage.getItem('isAddBook') === 'true' || localStorage.getItem('isEdit') === 'true') {
    localStorage.setItem('isAddBook', 'false')
    localStorage.setItem('isEdit', 'false')

    showElements(edit, button)
    switchDisplay(contentBlock)
  }

  let id = localStorage.getItem('current').slice(4)
  content.children[0].innerHTML = storage[id].bookName
  content.children[2].innerHTML = storage[id].rating + ' из 10'
  content.children[4].innerHTML = storage[id].description
  cover.children[0].src = storage[id].img
}

openBook()
