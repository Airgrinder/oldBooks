import {addBook} from './addBook.js'
import {storage, addItem} from './localStorage.js'


localStorage.setItem('isAddBook', 'false')
const subtitleTextArea = document.getElementsByClassName('main-content-enderSubtitle')[0].children[0]
const contentBlock = document.getElementsByClassName('main-content-wrapper')[0].children
const ratingSelect = document.getElementById('rating')
const imgSelect = document.getElementsByClassName('main-content-coverSelect')[0].children[0]
const nameInput = document.getElementsByClassName('main-content-chooseName')[0].children[0]
const edit = document.getElementsByClassName('main-content-edit')[0]

export function createNewBook() {
  console.log(imgSelect)
  localStorage.setItem('isEdit', 'false')
  if (localStorage.getItem('isAddBook') === 'true') {
    localStorage.setItem('isAddBook', 'false')
    if (nameInput.value && subtitleTextArea.value) {
      addBook(nameInput.value, subtitleTextArea.value, ratingSelect.value,
        Object.keys(storage).length, imgSelect.value)
      addItem(nameInput.value, subtitleTextArea.value, ratingSelect.value,
        Object.keys(storage).length + '', imgSelect.value)
      localStorage.setItem('storage', JSON.stringify(storage))
    }
  } else {
    localStorage.setItem('isAddBook', 'true')
  }

  for (const argument of contentBlock) {
    argument.style.display = (argument.style.display === 'none') ? 'block' : 'none'
  }
  edit.style.display = (edit.style.display === 'none') ? 'block' : 'none'
}

