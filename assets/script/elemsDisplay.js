export function hideElements() {
  for (const argument of arguments) {
    argument.style.display = 'none'
  }
}

export function showElements() {
  for (const argument of arguments) {
    argument.style.display = 'block'
  }
}

export function switchDisplay(collection) {
  for (const elem of collection) {
    elem.style.display = (elem.style.display === 'none') ? 'block' : 'none'
  }
}
