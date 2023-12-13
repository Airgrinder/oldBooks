export let storage = JSON.parse(localStorage.getItem('storage')) || {}

export function addItem(bookName, description, rating, id, img) {
  storage[Object.keys(storage).length] = {
    bookName: bookName,
    description: description,
    rating: rating,
    id: id,
    img: img
  }
}
