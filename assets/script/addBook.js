import {openBook} from "./openBook.js"


export function addBook(name, subtitle, rating, id, img) {
  const bookList = document.getElementsByClassName("main-sidemenu")[0]
  const newBook = document.createElement('div')
  const defaultImg = 'https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2020/01/billy-herrington_5e28bb54852d5.png'
  newBook.className = 'main-sidemenu-item'
  newBook.id = 'item' + id

  newBook.innerHTML = `
    <img class="main-sidemenu-item-cover" src="${img || defaultImg}" alt="">
    <div class="main-sidemenu-item-wrapper">
      <div class="main-sidemenu-item-name">${name}</div>
      <div class="main-sidemenu-item-subtitle">${subtitle}</div>
      <div class="main-sidemenu-item-rating">${rating} из 10</div>
      <button class="main-sidemenu-item-button button">Открыть</button>
    </div>
  `

  newBook.children[1].children[3].addEventListener('click', (event) => {
    openBook(event)
  })

  bookList.appendChild(newBook)
}
