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


// Dark mode toggle c'est pour le bouton de basculement du thème sombre
// Ce code sélectionne le bouton de basculement du thème sombre, le corps du document et l'icône à l'intérieur du bouton. 
// Il vérifie ensuite si un thème sombre a été précédemment sauvegardé dans le stockage local et applique ce thème si c'est le cas. 
// Enfin, il ajoute un écouteur d'événement au bouton pour basculer entre les thèmes clair et sombre lorsque l'utilisateur clique dessus,
//  en mettant à jour le stockage local en conséquence.

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

/* Charger le thème sauvegardé */

if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark-mode");
    icon.classList.replace("fa-moon","fa-sun");
}

/* Switch thème */
// Ajouter un écouteur d'événement pour le clic sur le bouton de basculement du thème
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if(body.classList.contains("dark-mode")){
        icon.classList.replace("fa-moon","fa-sun");
        localStorage.setItem("theme","dark");
    }else{
        icon.classList.replace("fa-sun","fa-moon");
        localStorage.setItem("theme","light");
}

});


// EmailJS integration for contact form c'est pour l'intégration d'EmailJS pour le formulaire de contact
(function(){
    emailjs.init("q8XLEJ91ad8Vu2fgF");
})();




// cette partie du code écoute l'événement de soumission du formulaire de contact, 
// empêche le comportement par défaut de soumission du formulaire, 
// puis utilise EmailJS pour envoyer les données du formulaire à un service et un modèle spécifiques. 
// Si l'envoi est réussi, une alerte de succès est affichée, sinon une alerte d'erreur est montrée.
document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    emailjs.sendForm(
        'service_t0h9t6a',
        'template_bgwp5xc',
        this
)
.then(function(){
    alert("Message envoyé avec succès 🚀");
}, function(error){
    alert("Erreur lors de l'envoi ❌");

});

});

// elle permet de récupérer les valeurs des champs du formulaire de contact, de construire un message formaté, 
// puis d'ouvrir WhatsApp avec ce message pré-rempli pour que l'utilisateur puisse l'envoyer directement à un numéro spécifique.
document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    let nom = document.querySelector('input[placeholder="Nom"]').value;
    let prenom = document.querySelector('input[placeholder="Prénom"]').value;
    let email = document.querySelector('input[placeholder="Email"]').value;
    let message = document.querySelector('textarea').value;

    let texte = `Bonjour Lahad 👋 (mon portfolio)

                    Nom: ${nom}
                    Prénom: ${prenom}
                    Email: ${email}

                    Message:
                    ${message}
    `;

    let url = "https://wa.me/221773984425?text=" + encodeURIComponent(texte);

window.open(url, "_blank");

});

