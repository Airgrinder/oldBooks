import {addBook} from './addBook.js'


export let storage = JSON.parse(localStorage.getItem('storage')) || {}

export function addItem(bookName, description, rating) {
  storage[Object.keys(storage).length] = {
    bookName: bookName,
    description: description,
    rating: rating
  }
}

for (const key in storage) {
  addBook(storage[key].bookName, storage[key].description, storage[key].rating)
}
