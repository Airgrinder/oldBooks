import {createNewBook} from './assets/script/createNewBook.js'
import {openBook} from './assets/script/openBook.js'

document.getElementsByClassName('main-button')[0].addEventListener('click', createNewBook)
const openButton = document.getElementsByClassName('main-sidemenu-item-button')

for (const element of openButton) {
  element.addEventListener('click', (event)=>{openBook(event)})
}
