const open = document.getElementById("open");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar")
const a = 0;

open.addEventListener("click", ()=> {
    navbar.classList.remove("-translate-x-full");
})

close.addEventListener("click", ()=> {
    navbar.classList.add("-translate-x-full");
})