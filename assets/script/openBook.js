const content = document.getElementsByClassName('main-content-wrapper')[0]

export function openBook(e) {
  content.children[0].innerHTML = e.srcElement.parentElement.children[0].innerHTML
  content.children[2].innerHTML = e.srcElement.parentElement.children[2].innerHTML
  content.children[4].innerHTML = e.srcElement.parentElement.children[1].innerHTML
}
