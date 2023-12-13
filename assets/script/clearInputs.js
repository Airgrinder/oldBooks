const subtitleTextArea = document.getElementsByClassName('main-content-enderSubtitle')[0].children[0]
const ratingSelect = document.getElementById('rating')
const imgSelect = document.getElementsByClassName('main-content-coverSelect')[0].children[0]
const nameInput = document.getElementsByClassName('main-content-chooseName')[0].children[0]

export function clearInputs() {
  imgSelect.value = ''
  nameInput.value = ''
  subtitleTextArea.value = ''
  ratingSelect.selectedIndex = 0
}
