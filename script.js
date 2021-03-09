// MENU

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener("click", () =>{
            nav.classList.toggle("show")    
        })
    }
}

showMenu("nav-toggle","nav-menu")

// REMOVER MENU
const navLink = document.querySelectorAll(".nav_link")


// EFEITO NO LINK
function linkAction(){
    navLink.forEach(n => n.classList.remove("active"))
    this.classList.add("active")

// REMOVER MENU CELULAR
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show")
}

navLink.forEach(n => n.addEventListener("click", linkAction))


// SCROLL REVEAL
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: "true"
})

sr.reveal(".inicio_titulo", {})
sr.reveal(".inicio_img", {delay: 400})


sr.reveal(".sobre_img", {})
sr.reveal(".sobre_titulo", {})
sr.reveal(".sobre_subtitulo", {})
sr.reveal(".sobre_texto", {delay: 400})


sr.reveal(".section-title", {delay:200})
sr.reveal(".ferramentas_img", {})



sr.reveal(".contato", {})