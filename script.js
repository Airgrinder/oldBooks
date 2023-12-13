import {createNewBook} from './assets/script/createNewBook.js'
import {openBook} from './assets/script/openBook.js'
import {editItem} from './assets/script/editBook.js'
import {storage} from './assets/script/localStorage.js'
import {addBook} from './assets/script/addBook.js'


const openButton = document.getElementsByClassName('main-sidemenu-item-button')

document.getElementsByClassName('main-button')[0].addEventListener('click', createNewBook)
document.getElementsByClassName('main-content-edit')[0].addEventListener('click', editItem)

for (const element of openButton) {
  element.addEventListener('click', (event) => {
    openBook(event)
  })
}

for (const key in storage) {
  addBook(storage[key].bookName, storage[key].description, storage[key].rating, storage[key].id, storage[key].img)
}
