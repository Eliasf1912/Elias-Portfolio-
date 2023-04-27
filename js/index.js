const open = document.getElementById("open");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar");
const navLinks =  document.querySelectorAll("#navbar li");
const divBg = document.getElementById("bg");
const divP = document.getElementById("Parent");


open.addEventListener("click", ()=> {
    navbar.classList.remove("-translate-x-full");
})

close.addEventListener("click", ()=> {
    navbar.classList.add("-translate-x-full");
})

navLinks.forEach(link => link.addEventListener("click", ()=> {
    navbar.classList.add("-translate-x-full");
}))
