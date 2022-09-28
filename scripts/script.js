const nav = document.querySelector("#navbar")
const menu = document.querySelector('#ham')
const links = document.querySelectorAll("#navbar li");


menu.addEventListener("click", () => {
    nav.classList.toggle("open")
    console.log("clicked")
})

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open")
        menu.classList.remove("active")
    })
})