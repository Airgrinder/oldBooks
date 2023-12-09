import {createNewBook} from './assets/script/createNewBook.js'
import {openBook} from './assets/script/openBook.js'


const openButton = document.getElementsByClassName('main-sidemenu-item-button')
document.getElementsByClassName('main-button')[0].addEventListener('click', createNewBook)

for (const element of openButton) {
  element.addEventListener('click', (event) => {
    openBook(event)
  })
}
