function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pega a imagem
  const img = document.querySelector("#profile img")

  //subtituir a imagem
  if (html.classList.contains("light")) {
    //se estiver light mode, add a imagem light
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
