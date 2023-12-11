import {createNewBook} from './assets/script/createNewBook.js'
import {openBook} from './assets/script/openBook.js'
import {editItem} from './assets/script/localStorage.js'


const openButton = document.getElementsByClassName('main-sidemenu-item-button')

document.getElementsByClassName('main-button')[0].addEventListener('click', createNewBook)
document.getElementsByClassName('main-content-edit')[0].addEventListener('click', editItem)

for (const element of openButton) {
  element.addEventListener('click', (event) => {
    openBook(event)
  })
}

