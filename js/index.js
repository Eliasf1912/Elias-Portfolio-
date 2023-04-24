const open = document.getElementById("open");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar")

open.addEventListener("click", ()=> {
    navbar.classList.remove("-translate-x-full");
})

close.addEventListener("click", ()=> {
    navbar.classList.add("-translate-x-full");
})