// Gérer l'affichage du menu avec l'icône ou le burger
const icon = document.querySelector("#topnav_icon");
const menu = document.querySelector("#topnav_menu");
const burger = document.querySelector("#burger");

icon.addEventListener("mouseover", () => {
  icon.classList.add("open");
  menu.classList.add("open");

  menu.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseLeave() {
  // Vérifier si le menu et l'icône ont la classe 'open'
  if (icon.classList.contains("open") && menu.classList.contains("open")) {
    icon.classList.remove("open");
    menu.classList.remove("open");

    // Retirer le gestionnaire d'événement après avoir effectué l'action
    menu.removeEventListener("mouseleave", handleMouseLeave);
  }
}

// Toggle de la classe 'active' pour le burger
burger.addEventListener("click", () => {
  if (!burger.classList.contains("active")) {
    burger.classList.add("active");
    menu.classList.add("open");
  } else {
    burger.classList.remove("active");
    menu.classList.remove("open");
  }
});

// Fonction pour gérer les éléments cliquables du menu
function toggleElement(element, target) {
  element.addEventListener("click", () => {
    if (!target.classList.contains("open")) {
      target.classList.add("open");
    } else {
      target.classList.remove("open");
    }
  });
}

const elements = [
  {
    element: document.querySelector("#chaussures"),
    target: document.querySelector("#listeChaussures"),
  },
  {
    element: document.querySelector("#sacs"),
    target: document.querySelector("#listeSacs"),
  },
  {
    element: document.querySelector("#robes"),
    target: document.querySelector("#listeRobes"),
  },
  {
    element: document.querySelector("#bijoux"),
    target: document.querySelector("#listeBijoux"),
  },
];

elements.forEach((item) => toggleElement(item.element, item.target));

// Variables globales GSAP
const logo = document.querySelector(".LOGO");
const vit = document.querySelector(".vit");
const anim = document.querySelectorAll(".anim");
window.addEventListener("DOMContentLoaded", () =>
  createGSAPTimeline(logo, vit, anim)
);

// Fonction pour créer une timeline GSAP
function createGSAPTimeline(logo, vit, anim) {
  // Création d'une timeline GSAP avec pause initiale
  const TL = gsap.timeline({ paused: true });

  // Animation de défilement depuis le haut pour les éléments 'vit'
  TL.staggerFrom(vit, 1, { top: -100, ease: "power2.out" }, 0.3);

  // Animation de défilement depuis le haut pour les éléments 'vit'
  TL.staggerFrom(
    logo,
    1,
    { top: -50, opacity: 0, ease: "power2.out" },
    0.3,
    "-=0.8"
  );

  // Animation de fondu pour les éléments 'anim' avec un délai
  TL.staggerFrom(anim, 3, { opacity: 0, ease: "power2.out" }, 0.3, "-=0.2");

  // Lecture automatique de la timeline
  TL.play();
}

// Intersection Observer API
let observer = new IntersectionObserver(
  (observables) => {
    // La fonction de rappel est appelée chaque fois que les éléments observés changent d'état
    observables.forEach((observable) => {
      // Vérifie si la portion visible de l'élément est supérieure à 50%
      if (observable.intersectionRatio > 0.5) {
        // Si plus de 50% de l'élément est visible, retire la classe 'not-visible'
        observable.target.classList.remove("not-visible");

        // Cesse d'observer cet élément pour éviter des actions répétées
        observer.unobserve(observable.target);
      }
    });
  },
  { threshold: [0.5] } // Définit le seuil d'intersection à 50%
);

// Observer les éléments
let items = document.querySelectorAll(".yeah");
observeElements(observer, items);

// Fonction pour observer les éléments avec Intersection Observer API
function observeElements(observer, items) {
  // Pour chaque élément à observer
  items.forEach((item) => {
    // Ajout de la classe 'not-visible' pour masquer l'élément initialement
    item.classList.add("not-visible");

    // Observation de l'élément par l'observateur Intersection Observer
    observer.observe(item);
  });
}

// Bouton coeur page Sélection
const coeur = document.querySelector("#coeur");
if (coeur) {
  coeur.addEventListener("click", () => {
    coeur.classList.toggle("active");
  });
}

// Variables globales pour le slideshow
const slideImage = document.querySelector("#slide");
const precedentBtn = document.querySelector("#precedent");
const suivantBtn = document.querySelector("#suivant");

// Tableau contenant les chemins des différentes images du slide
const slideImages = [
  "./images/selection/responsive/vue1-1000px.jpg",
  "./images/selection/responsive/vue2-1000px.jpg",
  "./images/selection/responsive/vue3-1000px.jpg",
  "./images/selection/responsive/vue4-1000px.jpg",
];

// Variable stockant l'index actuel du slide
let currentSlideIndex = 0;

// Fonction pour changer le slide
function changeSlide(sens) {
  currentSlideIndex += sens;

  // Boucle vers le dernier slide si on va au-delà du premier
  if (currentSlideIndex < 0) {
    currentSlideIndex = slideImages.length - 1;
  }

  // Boucle vers le premier slide si on va au-delà du dernier
  if (currentSlideIndex >= slideImages.length) {
    currentSlideIndex = 0;
  }

  // Met à jour l'attribut source de l'élément 'slide' avec la nouvelle image
  slideImage.src = slideImages[currentSlideIndex];
}

// Ajout d'une condition pour éviter message d'erreur 'Cannot read properties of null '
if (precedentBtn && suivantBtn) {
  precedentBtn.addEventListener("click", () => changeSlide(-1));
  suivantBtn.addEventListener("click", () => changeSlide(1));
}
