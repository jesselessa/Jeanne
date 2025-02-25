// Améliorer le chargement de mes images en activant le chargement paresseux
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");
  images.forEach((image) => image.setAttribute("loading", "lazy"));
});

// Gérer l'affichage du menu avec l'icône ou le burger
const icon = document.querySelector("#topnav_icon");
const menu = document.querySelector("#topnav_menu");
const burger = document.querySelector("#burger");

icon.addEventListener("mouseover", () => {
  icon.classList.add("open");
  menu.classList.add("open");

  menu.addEventListener("mouseleave", handleMouseLeave);
});

const handleMouseLeave = () => {
  if (icon.classList.contains("open") && menu.classList.contains("open")) {
    icon.classList.remove("open");
    menu.classList.remove("open");
    menu.removeEventListener("mouseleave", handleMouseLeave);
  }
};

// Toggle de la classe 'active' pour le burger
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("open");
});

// Fonction pour gérer les éléments cliquables du menu
const toggleElement = (element, target) => {
  element.addEventListener("click", () => {
    target.classList.toggle("open");
  });
};

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
const createGSAPTimeline = (logo, vit, anim) => {
  // Création d'une timeline GSAP avec pause initiale
  const TL = gsap.timeline({ paused: true });

  // Vérifie si 'vit' existe avant d'ajouter l'animation de défilement depuis le haut
  if (vit) TL.staggerFrom(vit, 1, { top: -100, ease: "power2.out" }, 0.3);

  // Même vérification pour le logo
  if (logo)
    TL.staggerFrom(
      logo,
      1,
      { top: -50, opacity: 0, ease: "power2.out" },
      0.3,
      "-=0.8"
    );

  // Vérifie si au moins un élément 'anim' existe avant d'ajouter l'animation de fondu avec un délai
  if (anim.length > 0)
    TL.staggerFrom(anim, 3, { opacity: 0, ease: "power2.out" }, 0.3, "-=0.2");

  // Lecture automatique de la timeline
  TL.play();
};

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
  "../images/selection/responsive/vue1-1000px.jpg",
  "../images/selection/responsive/vue2-1000px.jpg",
  "../images/selection/responsive/vue3-1000px.jpg",
  "../images/selection/responsive/vue4-1000px.jpg",
];

// Variable stockant l'index actuel du slide
let currentSlideIndex = 0;

// Fonction pour changer le slide
const changeSlide = (sens) => {
  currentSlideIndex += sens;

  // Boucle vers le dernier slide si on va au-delà du premier
  if (currentSlideIndex < 0) currentSlideIndex = slideImages.length - 1;

  // Boucle vers le premier slide si on va au-delà du dernier
  if (currentSlideIndex >= slideImages.length) currentSlideIndex = 0;

  // Met à jour l'attribut source de l'élément 'slide' avec la nouvelle image
  slideImage.src = slideImages[currentSlideIndex];
};

// Ajout d'une condition pour éviter message d'erreur 'Cannot read properties of null '
if (precedentBtn && suivantBtn) {
  precedentBtn.addEventListener("click", () => changeSlide(-1));
  suivantBtn.addEventListener("click", () => changeSlide(1));
}
