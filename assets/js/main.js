/* ========= HEADER TOGGLE ========== */
const logo = document.getElementById("logo");
const header = document.querySelector("header");
const nav = document.getElementById("nav-menu");
let scrollHeight = 0;
let width = window.innerWidth;

/*
if (window.innerWidth > 1000) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        console.log(scrollY);
        if(scrollHeight < scrollY) {
            logo.innerText = 'ap'
            logo.classList.add('new__logo');
            header.classList.add('hide__header')
            nav.classList.add('hide__menu')
        } else {
            logo.classList.remove('new__logo')
            header.classList.remove('hide__header')
            logo.innerText = '{() => ap}'
            nav.classList.remove('hide__menu')
        }
        scrollHeight = scrollY;
    })
}
*/

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollHeight > 140) {
    header.classList.add("scroll-header");
  }
  if (scrollHeight < 140) {
    header.classList.remove("scroll-header");
  }

  scrollHeight < scrollY
    ? header.classList.add("hide__header")
    : header.classList.remove("hide__header");

  if (window.innerWidth < 480 && window.scrollY < 80) {
    header.classList.remove("hide__header");
  }

  scrollHeight = scrollY;
});

/* Change logo */
if (window.innerWidth < 500) {
  logo.innerText = "ap";
}

/* ========= SHOW/HIDE MENU (SMALL SCREEN)========== */
const menu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  main = document.getElementById("main"),
  menuClass = "ri-menu-3-line",
  closeClass = "ri-close-line";

const showMenu = () => {
  header.classList.add("toggle-backdrop");
  menu.classList.toggle("show-menu");
  navToggle.classList.toggle(menuClass);
  navToggle.classList.toggle(closeClass);
  main.classList.add("blur");
};

navToggle.addEventListener("click", () => {
  if (navToggle.classList[0] === "ri-menu-3-line") {
    showMenu();
  } else {
    hideMenu();
  }
});

/* Hide menu on click */
const navLinks = document.querySelectorAll(".nav__link"),
  mainBody = document.getElementById("main");

const hideMenu = () => {
  menu.classList.remove("show-menu");
  main.classList.remove("blur");
  navToggle.classList.toggle(menuClass);
  navToggle.classList.toggle(closeClass);
  header.classList.remove("toggle-backdrop");
};

navLinks.forEach((e) => e.addEventListener("click", hideMenu));
mainBody.addEventListener("click", () => {
  hideMenu();
  if (navToggle.classList[0] == "ri-close-line") {
    navToggle.classList.toggle(menuClass);
    navToggle.classList.toggle(closeClass);
  }
  main.classList.remove("blur");
});
window.addEventListener("scroll", () => {
  hideMenu();
  if (navToggle.classList[0] == "ri-close-line") {
    navToggle.classList.toggle(menuClass);
    navToggle.classList.toggle(closeClass);
    header.classList.remove("toggle-backdrop");
  }
});

/* ========= SCROLL REVEAL ANIMATION ========== */
const sr = ScrollReveal({
  distance: "100px",
  duration: 2400,
  reset: false,
});

if (window.innerWidth > 500) {
  sr.reveal(
    `.home-opening,
               .home-name,
               .home-description,
               .home-description-2,
               .home__info-btn`,
    {
      origin: "top",
      interval: 200,
      distance: "40px",
    }
  );

  sr.reveal(
    `.projects-grid,
               #contact`,
    {
      origin: "bottom",
      interval: 300,
    }
  );

  sr.reveal(
    `.project__image-left,
    .project__content-left,
               .about__info`,
    {
      origin: "left",
      interval: 300,
    }
  );

  sr.reveal(
    `.project__image-right,
               .project__content-right,
               .about__img`,
    {
      origin: "right",
      interval: 300,
    }
  );
} else {
  sr.reveal(
    `.home,
               .about__info,
               .about__img,
               .projects__featured,
               .projects-other__list,
               #contact`,
    {
      origin: "bottom",
      interval: 200,
    }
  );
}

/* ========== 3D TILT EFFECT ========= */
VanillaTilt.init(document.querySelectorAll(".project__container"), {
  max: 5,
  speed: 600,
  glare: true,
  "max-glare": 0.3,
  reverse: true,
});
