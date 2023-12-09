import {openBook} from './assets/script/openBook.js'


const openButton = document.getElementsByClassName('main-sidemenu-item-button')

for (const element of openButton) {
  element.addEventListener('click', (event) => {
    openBook(event)
  })
}
