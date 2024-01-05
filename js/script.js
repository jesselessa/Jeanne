// // Menu
// function showMenu() {
//   const menu = document.querySelector("#topnav_menu");
//   const icon = document.querySelector("#topnav_icon");

//   if (menu.className === "") {
//     menu.className = "open";
//     icon.className = "open";
//   } else {
//     menu.className = "";
//     icon.className = "";
//   }
// }

// // Chaussures
// const chaussures = document.querySelector("#chaussures");
// const listeChaussures = document.querySelector("#listeChaussures");

// chaussures.addEventListener("click", () => {
//   listeChaussures.classList.toggle("open");
// });

// //  Sacs
// const sacs = document.querySelector("#sacs");
// const listeSacs = document.querySelector("#listeSacs");

// sacs.addEventListener("click", () => {
//   listeSacs.classList.toggle("open");
// });

// // Robes
// const robes = document.querySelector("#robes");
// const listeRobes = document.querySelector("#listeRobes");

// robes.addEventListener("click", () => {
//   listeRobes.classList.toggle("open");
// });

// // Bijoux
// const bijoux = document.querySelector("#bijoux");
// const listeBijoux = document.querySelector("#listeBijoux");

// bijoux.addEventListener("click", () => {
//   listeBijoux.classList.toggle("open");
// });

// // Burger croix
// const burger = document.querySelector("#burger");

// burger.addEventListener("click", () => {
//   burger.classList.toggle("active");
// });

// // Menu responsive
// const menu = document.querySelector("#topnav_menu");
// const icon = document.querySelector("#topnav_icon");

// burger.addEventListener("click", () => {
//   menu.classList.toggle("open");
// });

// // GSAP
// const logo = document.querySelector(".LOGO");
// const vit = document.querySelector(".vit");
// const anim = document.querySelectorAll(".anim");

// window.addEventListener("DOMContentLoaded", () => {
//   // Used "DOMContentLoaded" instead of event "load" to prevent warning messages
//   const TL = gsap.timeline({ paused: true });

//   TL.staggerFrom(vit, 1, { top: -100, ease: "power2.out" }, 0.3);
//   TL.staggerFrom(
//     logo,
//     1,
//     { top: -50, opacity: 0, ease: "power2.out" },
//     0.3,
//     "-=0.8"
//   );
//   TL.staggerFrom(anim, 3, { opacity: 0, ease: "power2.out" }, 0.3, "-=0.2");

//   TL.play();
// });

// // Intersection Observer API
// let observer = new IntersectionObserver(
//   function (observables) {
//     observables.forEach(function (observable) {
//       // L'élément devient visible
//       if (observable.intersectionRatio > 0.5) {
//         observable.target.classList.remove("not-visible");
//         observer.unobserve(observable.target);
//       }
//     });
//   },
//   {
//     threshold: [0.5],
//   }
// );

// // On observe nos éléments
// let items = document.querySelectorAll(".yeah");
// items.forEach(function (item) {
//   item.classList.add("not-visible");
//   observer.observe(item);
// });

// // Bouton coeur page vêtement
// const coeur = document.querySelector("#coeur");
// if (coeur) {
//   // Add "if" statement to remove error message in console "Cannot read property 'addEventListener' of null"
//   coeur.addEventListener("click", () => {
//     coeur.classList.toggle("active");
//   });
// }

// // Slideshow vêtement sélectionné
// const slide = new Array(
//   "./images/sélection/responsive/vue1-1000px.jpg",
//   "./images/sélection/responsive/vue2-1000px.jpg",
//   "./images/sélection/responsive/vue3-1000px.jpg",
//   "./images/sélection/responsive/vue4-1000px.jpg"
// );

// let numero = 0;

// function ChangeSlide(sens) {
//   numero = numero + sens;
//   if (numero < 0) numero = slide.length - 1;
//   if (numero > slide.length - 1) numero = 0;
//   document.querySelector("#slide").src = slide[numero];
// }

// Fonction pour basculer la visibilité du menu et de l'icône
function toggleMenuAndIcon(menu, icon) {
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

// Fonction pour gérer les éléments cliquables
function toggleElement(element, target) {
  element.addEventListener("click", () => {
    target.classList.toggle("open");
  });
}

// Fonction pour créer une timeline GSAP
function createGSAPTimeline(logo, vit, anim) {
  const TL = gsap.timeline({ paused: true });
  TL.staggerFrom(vit, 1, { top: -100, ease: "power2.out" }, 0.3);
  TL.staggerFrom(
    logo,
    1,
    { top: -50, opacity: 0, ease: "power2.out" },
    0.3,
    "-=0.8"
  );
  TL.staggerFrom(anim, 3, { opacity: 0, ease: "power2.out" }, 0.3, "-=0.2");
  TL.play();
}

// Fonction pour observer les éléments avec Intersection Observer API
function observeElements(observer, items) {
  items.forEach((item) => {
    item.classList.add("not-visible");
    observer.observe(item);
  });
}

// Fonction pour changer le slide du slideshow
function changeSlide(slide, numero, sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.querySelector("#slide").src = slide[numero];
  return numero;
}

// Toggle menu et icône lors du clic sur le burger
const icon = document.querySelector("#topnav_icon");
const menu = document.querySelector("#topnav_menu");
const menuList = document.querySelector("#topnav_menu .grande-categorie");
const burger = document.querySelector("#burger");

toggleElement(burger, menu);
toggleElement(burger, icon);

icon.addEventListener("mouseover", () => toggleMenuAndIcon(menu, icon));
menuList.addEventListener("mouseleave", () => toggleMenuAndIcon(menu, icon));

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  toggleMenuAndIcon(menu, icon);
});

// Gérer les éléments cliquables
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

// GSAP
const logo = document.querySelector(".LOGO");
const vit = document.querySelector(".vit");
const anim = document.querySelectorAll(".anim");
window.addEventListener("DOMContentLoaded", () =>
  createGSAPTimeline(logo, vit, anim)
);

// Intersection Observer API
let observer = new IntersectionObserver(
  (observables) => {
    observables.forEach((observable) => {
      if (observable.intersectionRatio > 0.5) {
        observable.target.classList.remove("not-visible");
        observer.unobserve(observable.target);
      }
    });
  },
  { threshold: [0.5] }
);

// Observer les éléments
let items = document.querySelectorAll(".yeah");
observeElements(observer, items);

// Bouton coeur page Vêtement
const coeur = document.querySelector("#coeur");
if (coeur) {
  coeur.addEventListener("click", () => {
    coeur.classList.toggle("active");
  });
}

// Slideshow page Sélection
const slide = [
  "./images/selection/responsive/vue1-1000px.jpg",
  "./images/selection/responsive/vue2-1000px.jpg",
  "./images/selection/responsive/vue3-1000px.jpg",
  "./images/selection/responsive/vue4-1000px.jpg",
];
let numero = 0;

// Changement de slide
function ChangeSlide(sens) {
  numero = changeSlide(slide, numero, sens);
}
