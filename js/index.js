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


// gsap animation

gsap.registerPlugin(ScrollTrigger)

// HEADER SECTION ANIM

gsap.from(".top-anim",{
    y: -800,
    duration: 1.3,
    opacity: 0,
    ease: "expo",
});

// navbar Desktop

gsap.from(".navbar-anim",{
    y: -500,
    duration: 1.3,
    opacity: 0,
    delay: 1.3,
    ease: "expo",
});

// navbar Phone

gsap.from(".navbarP-anim",{
    y: -500,
    duration: 0.8,
    opacity: 0,
    delay: 1.3,
    ease: "expo",
});

gsap.from(".headerC-anim",{
    x: -500,
    duration: 2,
    opacity: 0,
    delay: 1.6,
    ease: "expo",
})

gsap.from(".headerC-anim2",{
    x: 1500,
    duration: 2,
    opacity: 0,
    delay: 2,
    ease: "expo",
});

// ABOUT SECTION ANIM

gsap.from(".h3-anim",{
    scrollTrigger:{
        trigger: ".About",
        start: "top 90%",
    },
    x: -500,
    duration: 0.8,
    ease: "sine",
    opacity: 0,
});

gsap.from(".img-anim",{
    scrollTrigger:{
        trigger: ".About",
        start: "top 90%",
    },
    x: -200,
    delay: 0.5,
    duration: 4,
    ease: "expo",
    opacity: 0,
});

// About Sect Phone

gsap.from(".AboutC",{
    scrollTrigger:{
        trigger: ".About",
        start: "top 50%",
    },
    delay: 0.4,
    x: -200,
    opacity: 0,
    stagger:{
        duration: 0.6,
        each: 0.3
    }
});

// SKILL SECTION ANIM 

gsap.from(".bg-anim", {
    duration: 1,
    x: -2000,
    scrollTrigger : {
        trigger: ".Skill",
        end: "end 70%",
    },
    ease: "power4"
});

gsap.from(".SkillT-anim",{
    scrollTrigger:{
        trigger: ".Skill",
        start: "top 90%",
    },
    x: -500,
    duration: 0.8,
    ease: "sine",
    opacity: 0,
    delay: 0.5
});

gsap.from(".Skill-tec-anim",{
    scrollTrigger:{
        trigger: ".Skill",
        start: "top 40%",
    },
    delay: 0.4,
    y: -200,
    opacity: 0,
    stagger:{
        duration: 0.4,
        each: 0.3
    }
});

// EDUC SECTION ANIM

gsap.from(".EducT-anim",{
    scrollTrigger:{
        trigger: ".Educ",
        start: "top 90%",
    },
    delay: 0.2,
    x: -500,
    duration: 0.8,
    ease: "sine",
    opacity: 0,
});

gsap.from(".EducP",{
    scrollTrigger:{
        trigger: ".Educ",
        start: "top 50%",
    },
    delay: 0.4,
    x: -200,
    opacity: 0,
    stagger:{
        duration: 0.6,
        each: 0.3
    }
});

// PROJECT SECTION ANIM

gsap.from(".bg-anim2", {
    duration: 1,
    x: 2500,
    scrollTrigger : {
        trigger: ".Project",
        start: "top 70%",
    },
    ease: "power4"
});

gsap.from(".ProjectT-anim",{
    scrollTrigger:{
        trigger: ".Project",
        start: "top 90%",
    },
    x: -500,
    duration: 0.8,
    ease: "sine",
    opacity: 0,
    delay: 1
});

gsap.from(".BootstrapI",{
    scrollTrigger:{
        trigger: ".Project",
        start: "top 20%"
    },
    x: -500,
    duration: 0.8,
    ease: "sine",
    opacity: 0,
    delay: 0.5
});

gsap.from(".BootstrapT",{
    scrollTrigger:{
        trigger: ".Project",
        start: "top 10%"
    },
    delay: 0.4,
    x: 1800,
    opacity: 0,
    stagger:{
        duration: 0.8,
        each: 0.2
    }
});

gsap.from(".TodolistI",{
    scrollTrigger:{
        trigger: ".BootstrapP",
        start: "top 10%",
    },
    x: -500,
    duration: 0.8,
    ease: "sine",
    opacity: 0,
    delay: 0.5
});

gsap.from(".TodolistT",{
    scrollTrigger:{
        trigger: ".BootstrapP",
        start: "top 10%",
    },
    delay: 0.4,
    x: 1800,
    opacity: 0,
    stagger:{
        duration: 0.8,
        each: 0.2
    }
});

gsap.from(".TrustfallI",{
    scrollTrigger:{
        trigger: ".TodolistP",
        start: "top 10%"
    },
    x: -500,
    duration: 0.8,
    ease: "sine",
    opacity: 0,
    delay: 0.5
});

gsap.from(".TrustfallT",{
    scrollTrigger:{
        trigger: ".TodolistP",
        start: "top 10%",
    },
    delay: 0.4,
    x: 1800,
    opacity: 0,
    stagger:{
        duration: 0.8,
        each: 0.2
    }
});

// CONTACT SECTION ANIM

gsap.from(".ContactH3",{
    scrollTrigger:{
        trigger: ".Contact",
        start: "top 90%"
    },
    x: -500,
    duration: 0.8,
    ease: "sine",
    opacity: 0,
    delay: 1
});

gsap.from(".ContactT",{
    scrollTrigger:{
        trigger: ".Contact",
        start: "top 50%",
    },
    delay: 0.4,
    x: -200,
    opacity: 0,
    stagger:{
        duration: 0.6,
        each: 0.3
    }
});

// FOOTER ANIM

// gsap.from(".Footer",{
//     scrollTrigger:{
//         trigger:".Ct",
//         start: "top 50%",
//     },
//     duration: 0.4,
//     opacity: 0,
//     y: 400,
//     ease: "expo"
// });

// gsap.from(".FooterC",{
//     scrollTrigger:{
//         trigger:".Ct",
//         start: "top 80%",
//     },
//     duration: 0.8,
//     opacity: 0,
//     y: 400,
//     ease: "expo",
//     delay: 0.4
// })