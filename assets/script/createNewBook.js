import {addBook} from './addBook.js'
import {storage, addItem} from './localStorage.js'


const contentBlock = document.getElementsByClassName('main-content-wrapper')[0].children
const nameInput = document.getElementsByClassName('main-content-chooseName')[0].children[0]
const subtitleTextArea = document.getElementsByClassName('main-content-enderSubtitle')[0].children[0]
const ratingSelect = document.getElementById('rating')
let isAddBook = false


export function createNewBook() {
  if (isAddBook) {
    if (nameInput.value && subtitleTextArea.value) {
      addBook(nameInput.value, subtitleTextArea.value, ratingSelect.value)
      addItem(nameInput.value, subtitleTextArea.value, ratingSelect.value)
      localStorage.setItem('storage', JSON.stringify(storage))
    }
  }

  isAddBook = !isAddBook

  for (const argument of contentBlock) {
    argument.style.display = (argument.style.display === 'none' || this.style.display === 'block') ? 'block' : 'none'
  }
}
