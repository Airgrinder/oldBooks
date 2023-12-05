import { addBook } from './assets/script/addBook.js'

addBook('test', 'test', '10')

const addBookButton = document.getElementsByClassName('main-button')[0]

function createNewBook() {
  console.log('test')
}

addBookButton.addEventListener('click',createNewBook)
