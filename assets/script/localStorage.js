import {addBook} from './addBook.js'


export let storage = JSON.parse(localStorage.getItem('storage')) || {}
const subtitleTextArea = document.getElementsByClassName('main-content-enderSubtitle')[0].children[0]
const ratingSelect = document.getElementById('rating')
const contentBlock = document.getElementsByClassName('main-content-wrapper')[0].children
const mainButton = document.getElementsByClassName('main-button')[0]
const nameInput = document.getElementsByClassName('main-content-chooseName')[0].children[0]
const content = document.getElementsByClassName('main-content-wrapper')[0]

export function addItem(bookName, description, rating, id) {
  storage[Object.keys(storage).length] = {
    bookName: bookName,
    description: description,
    rating: rating,
    id: id
  }
}

export function editItem() {
  if (localStorage.getItem('current') === '') return
  let target = document.getElementById(localStorage.getItem('current')).children[1]

  if (localStorage.getItem('isEdit') !== 'true') {
    localStorage.setItem('isEdit', 'true')
    nameInput.value = target.children[0].innerText
    subtitleTextArea.value = target.children[1].innerText
    ratingSelect.selectedIndex = target.children[2].innerText.slice(0, 1) - 1
    mainButton.style.display = 'none'
  } else {
    localStorage.setItem('isEdit', 'false')
    target.children[0].innerText = nameInput.value
    target.children[1].innerText = subtitleTextArea.value
    target.children[2].innerText = ratingSelect.value + ' из 10'
    storage[localStorage.getItem('current').slice(4)].bookName = nameInput.value
    storage[localStorage.getItem('current').slice(4)].description = subtitleTextArea.value
    storage[localStorage.getItem('current').slice(4)].rating = ratingSelect.value
    content.children[0].innerHTML = nameInput.value
    content.children[2].innerHTML = ratingSelect.value + ' из 10'
    content.children[4].innerHTML = subtitleTextArea.value
    nameInput.value = ''
    subtitleTextArea.value = ''
    ratingSelect.selectedIndex = 0
    mainButton.style.display = 'block'
    localStorage.setItem('storage', JSON.stringify(storage))
  }

  for (const argument of contentBlock) {
    argument.style.display = (argument.style.display === 'none') ? 'block' : 'none'
  }
}

for (const key in storage) {
  addBook(storage[key].bookName, storage[key].description, storage[key].rating, storage[key].id)
}
