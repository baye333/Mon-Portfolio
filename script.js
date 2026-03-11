// script.js - interactions for portfolio

// navbar shrink on scroll and background change
// c'est pour la navbar qui se rétrécit et change de couleur lors du défilement
// cette fonction écoute l'événement de défilement sur la fenêtre et modifie le style de la barre de navigation en fonction de la position de défilement. Si l'utilisateur a défilé plus de 50 pixels, la barre de navigation rétrécit et son arrière-plan devient plus sombre. Sinon, elle revient à son état initial.

window.addEventListener("scroll", function(){
    let navbar = document.querySelector(".custom-navbar");
    if(window.scrollY > 50){
        navbar.style.padding = "10px 0";
        navbar.style.background = "rgba(11,15,25,0.95)";

}
else{
    navbar.style.padding = "15px 0";

}

});


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
}

});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href") === "#" + current){
        link.classList.add("active");
}

});

});

// add 'scrolled' class to navbar when page is scrolled
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// close responsive menu after clicking a link
const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const bsCollapse = new bootstrap.Collapse(document.querySelector('.navbar-collapse'), {
            toggle: false
        });
        bsCollapse.hide();
    });
});

// animate skill bars when scrolling to skills section
// Listen for the scroll event on the window
window.addEventListener("scroll", function(){

    const skills = document.querySelector("#skills");

    const position = skills.getBoundingClientRect().top;

    const screenPosition = window.innerHeight;

    if(position < screenPosition){

        document.querySelectorAll(".skill-bar").forEach(function(bar){

            bar.style.width = bar.getAttribute("data-width");

        });

    }

});


// JavaScript pour déclencher l’animation de révélation lors du défilement
// Sélectionnez tous les éléments avec les classes "reveal-left" et "reveal-right"
// Ajoutez un écouteur d'événement pour le défilement de la fenêtre
// Pour chaque élément, vérifiez sa position par rapport à la fenêtre
// Si l'élément est visible, ajoutez la classe "reveal-active" pour déclencher l'animation
// 

const reveals = document.querySelectorAll(".reveal-left, .reveal-right");

window.addEventListener("scroll", () => {

reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;


    if(elementTop < windowHeight - 100){
        el.classList.add("reveal-active");
    }

});

});



const skillBars = document.querySelectorAll(".skill-bar");

const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
        if(entry.isIntersecting){
            const bar = entry.target;
            bar.style.width = bar.dataset.width;

}

});

},

{threshold:0.5});

skillBars.forEach(bar=>{
    observer.observe(bar);
});

// pour la section experience 

const expElements = document.querySelectorAll(".reveal-exp");

const expObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
}

});

},
{threshold:0.3});

expElements.forEach(el=>{
    expObserver.observe(el);
});


// JavaScript pour déclencher l’animation de révélation lors du défilement

const eduElements = document.querySelectorAll(".reveal-edu");

const eduObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
}

});

},
{threshold:0.3

});

eduElements.forEach(el=>{
    eduObserver.observe(el);
});

// JavaScript pour déclencher l’animation de révélation lors du défilement
// pour la section projet

const projects = document.querySelectorAll(".reveal-project");

const projectObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("active");
        }

        });

        },
        {threshold:0.3

        });

        projects.forEach(el=>{
            projectObserver.observe(el);
});


// section certification


const certs = document.querySelectorAll(".reveal-cert");

const certObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
}

});

},
{threshold:0.3});

certs.forEach(el=>{
    certObserver.observe(el);
});

// section contact


const contact = document.querySelectorAll(".reveal-contact");

const contactObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
}

});

},
{
    threshold:0.3
});

contact.forEach(el=>{
    contactObserver.observe(el);
});

