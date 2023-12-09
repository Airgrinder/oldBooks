import {storage} from "./localStorage.js"


const content = document.getElementsByClassName('main-content-wrapper')[0]
const cover = document.getElementsByClassName('main-content-cover')[0]

export function openBook(e) {
  if(Object.keys(storage).length === 0) return cover.style = 'visibility:hidden'
  cover.style = 'visibility:show'
  if(!e) {
    content.children[0].innerHTML = storage[0].bookName
    content.children[2].innerHTML = storage[0].rating + ' из 10'
    return content.children[4].innerHTML = storage[0].description
  }
  content.children[0].innerHTML = e.srcElement.parentElement.children[0].innerHTML
  content.children[2].innerHTML = e.srcElement.parentElement.children[2].innerHTML
  content.children[4].innerHTML = e.srcElement.parentElement.children[1].innerHTML
}

openBook()
