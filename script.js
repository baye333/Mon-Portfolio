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

// cette partie du code sélectionne tous les liens de navigation dans la barre de navigation, 
// puis ajoute un écouteur d'événement de clic à chacun d'eux. Lorsque l'utilisateur clique sur un lien de navigation, 
// la fonction crée une instance de la classe Collapse de Bootstrap pour la barre de navigation 
// et appelle la méthode hide() pour fermer le menu déroulant si celui-ci est ouvert. Cela garantit que le menu 
const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const bsCollapse = new bootstrap.Collapse(document.querySelector('.navbar-collapse'), {
            toggle: false
        });
        bsCollapse.hide();
    });
});

// cette partie du code crée une fonction pour ajouter un écouteur d'événement de scroll à la fenêtre. 
// Elle sélectionne tous les éléments de type section et les ajoute à une liste. 
// Ensuite, elle crée une boucle forEach pour parcourir cette liste et ajouter un écouteur d'événement de scroll à chaque élément. 
// Lorsque l'utilisateur défile, la fonction crée une instance de la classe ScrollSpy de Bootstrap pour chaque section 
// et appelle la méthode refresh() pour actualiser la position de la section. Cela permet de synchroniser la position des éléments de navigation avec la position de défilement de la page.
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



///////////////////// animation process section
const processElements = document.querySelectorAll(".reveal-process");

window.addEventListener("scroll", () => {
    processElements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            el.classList.add("active");
        }
    });
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


// animation projets en cours
const ongoingElements = document.querySelectorAll(".reveal-ongoing");

window.addEventListener("scroll", () => {
    ongoingElements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            el.classList.add("active");
        }
    });
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

// animation disponibilité
const availabilityElements = document.querySelectorAll(".reveal-availability");

window.addEventListener("scroll", () => {
    availabilityElements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            el.classList.add("active");
        }
    });
});

// animation témoignages
const testimonialElements = document.querySelectorAll(".reveal-testimonial");

window.addEventListener("scroll", () => {
    testimonialElements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            el.classList.add("active");
        }
    });
});

const cta = document.querySelector(".reveal-cta");

window.addEventListener("scroll", () => {
    let position = cta.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if(position < screenHeight - 100){
        cta.classList.add("active");
    }
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

// INIT EMAILJS
(function(){
    emailjs.init("q8XLEJ91ad8Vu2fgF");
})();

const form = document.getElementById("contact-form");

/* ================= EMAIL ================= */

form.addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm(
        'service_t0h9t6a',
        'template_bgwp5xc',
        this
    )
    .then(function(){ 
        // Au lieu de l'alert, on redirige l'utilisateur
        window.location.href = "success.html"; 
    }, function(error){
        alert("Erreur lors de l'envoi ❌");
        console.log(error);
    });
});



/* ================= WHATSAPP ================= */

document.getElementById("whatsapp-btn").addEventListener("click", function(){

    let nom = form.nom.value;
    let prenom = form.prenom.value;
    let email = form.email.value;
    let message = form.message.value;

    let texte = `Bonjour Baye Lahad  (mon portfolio)

                    Nom: ${nom}
                    Prénom: ${prenom}
                    Email: ${email}

                    Message:
                    ${message}`;

    let url = "https://wa.me/221773984425?text=" + encodeURIComponent(texte);

    window.open(url, "_blank");

});



