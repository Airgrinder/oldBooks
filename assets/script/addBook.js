const bookList = document.getElementsByClassName("main-sidemenu")[0]

export function addBook(name, subtitle, rating) {
  const newBook = document.createElement('div')
  newBook.className = 'main-sidemenu-item'

  newBook.innerHTML = `
    <img class="main-sidemenu-item-cover" src="assets/img/pic2.svg" alt="">
    <div class="main-sidemenu-item-wrapper">
      <div class="main-sidemenu-item-name">${name}</div>
      <div class="main-sidemenu-item-subtitle">${subtitle}</div>
      <div class="main-sidemenu-item-rating">${rating} из 10</div>
      <button class="main-sidemenu-item-button button">Открыть</button>
    </div>
  `

  bookList.appendChild(newBook)
}
