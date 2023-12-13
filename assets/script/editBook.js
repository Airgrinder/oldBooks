import {hideElements, showElements, switchDisplay} from "./elemsDisplay.js";
import {clearInputs} from "./clearInputs.js";
import {storage} from "./localStorage.js";


const subtitleTextArea = document.getElementsByClassName('main-content-enderSubtitle')[0].children[0]
const ratingSelect = document.getElementById('rating')
const contentBlock = document.getElementsByClassName('main-content-wrapper')[0].children
const mainButton = document.getElementsByClassName('main-button')[0]
const nameInput = document.getElementsByClassName('main-content-chooseName')[0].children[0]
const imgSelect = document.getElementsByClassName('main-content-coverSelect')[0].children[0]
const content = document.getElementsByClassName('main-content-wrapper')[0]
const cover = document.getElementsByClassName('main-content-cover-wrapper')[0].children[0]

export function editItem() {
  if (localStorage.getItem('current') === '') return
  let target = document.getElementById(localStorage.getItem('current')).children[1]
  let id = localStorage.getItem('current').slice(4)

  if (localStorage.getItem('isEdit') !== 'true') {
    localStorage.setItem('isEdit', 'true')

    nameInput.value = storage[id].bookName
    subtitleTextArea.value = storage[id].description
    ratingSelect.selectedIndex = storage[id].rating - 1
    imgSelect.value = storage[id].img

    hideElements(mainButton)
  } else {
    localStorage.setItem('isEdit', 'false')

    target.children[0].innerText = nameInput.value
    target.children[1].innerText = subtitleTextArea.value
    target.children[2].innerText = ratingSelect.value + ' из 10'
    target.parentElement.children[0].src = imgSelect.value

    storage[id].bookName = nameInput.value
    storage[id].description = subtitleTextArea.value
    storage[id].rating = ratingSelect.value
    storage[id].img = imgSelect.value

    content.children[0].innerHTML = nameInput.value
    content.children[2].innerHTML = ratingSelect.value + ' из 10'
    content.children[4].innerHTML = subtitleTextArea.value
    cover.src = imgSelect.value

    clearInputs()

    showElements(mainButton)

    localStorage.setItem('storage', JSON.stringify(storage))
  }

  switchDisplay(contentBlock)
}
