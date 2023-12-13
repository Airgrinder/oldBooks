import {storage, addItem} from './localStorage.js'
import {switchDisplay} from './elemsDisplay.js'
import {clearInputs} from './clearInputs.js'
import {addBook} from './addBook.js'


localStorage.setItem('isAddBook', 'false')
const subtitleTextArea = document.getElementsByClassName('main-content-enderSubtitle')[0].children[0]
const contentBlock = document.getElementsByClassName('main-content-wrapper')[0].children
const ratingSelect = document.getElementById('rating')
const imgSelect = document.getElementsByClassName('main-content-coverSelect')[0].children[0]
const nameInput = document.getElementsByClassName('main-content-chooseName')[0].children[0]
const edit = document.getElementsByClassName('main-content-edit')[0]

export function createNewBook() {
  localStorage.setItem('isEdit', 'false')
  if (localStorage.getItem('isAddBook') !== 'true') {
    localStorage.setItem('isAddBook', 'true')
  } else {
    localStorage.setItem('isAddBook', 'false')
    if (nameInput.value && subtitleTextArea.value) {
      addBook(
        nameInput.value,
        subtitleTextArea.value,
        ratingSelect.value,
        Object.keys(storage).length,
        imgSelect.value
      )

      addItem(
        nameInput.value,
        subtitleTextArea.value,
        ratingSelect.value,
        Object.keys(storage).length + '',
        imgSelect.value
      )

      localStorage.setItem('storage', JSON.stringify(storage))
    }
  }

  clearInputs()
  switchDisplay(contentBlock)
  switchDisplay([edit])
}

