import {addBook} from './addBook.js'
import {storage, addItem} from './localStorage.js'

localStorage.setItem('isAddBook', 'false')
const contentBlock = document.getElementsByClassName('main-content-wrapper')[0].children
const nameInput = document.getElementsByClassName('main-content-chooseName')[0].children[0]
const subtitleTextArea = document.getElementsByClassName('main-content-enderSubtitle')[0].children[0]
const ratingSelect = document.getElementById('rating')

export function createNewBook() {
  if (localStorage.getItem('isAddBook') === 'true') {
    localStorage.setItem('isAddBook', 'false')
    if (nameInput.value && subtitleTextArea.value) {
      addBook(nameInput.value, subtitleTextArea.value, ratingSelect.value)
      addItem(nameInput.value, subtitleTextArea.value, ratingSelect.value)
      localStorage.setItem('storage', JSON.stringify(storage))
    }
  } else {
    localStorage.setItem('isAddBook', 'true')
  }

  for (const argument of contentBlock) {
    argument.style.display = (argument.style.display === 'none') ? 'block' : 'none'
  }
}

