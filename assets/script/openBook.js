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
    console.log('test')
    for (const argument of contentBlock) {
      argument.style.display = (argument.style.display === 'none') ? 'block' : 'none'
    }
    edit.style.display = 'block'
    button.style.display = 'block'
  }
  localStorage.setItem('isAddBook', 'false')
  localStorage.setItem('isEdit', 'false')

  if (!e) {
    content.children[0].innerHTML = storage[0].bookName
    content.children[2].innerHTML = storage[0].rating + ' из 10'
    cover.children[0].src = storage[0].img
    return content.children[4].innerHTML = storage[0].description
  }

  content.children[0].innerHTML = e.srcElement.parentElement.children[0].innerHTML
  content.children[2].innerHTML = e.srcElement.parentElement.children[2].innerHTML
  content.children[4].innerHTML = e.srcElement.parentElement.children[1].innerHTML
  cover.children[0].src = e.srcElement.parentElement.parentElement.children[0].src
}

openBook()
