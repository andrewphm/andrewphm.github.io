 /* ========= HEADER TOGGLE ========== */
const logo = document.getElementById('logo');
const header = document.querySelector('header')
const nav = document.getElementById('nav-menu')
let scrollHeight = 0;

window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
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


 /* ========= SCROLL REVEAL ANIMATION ========== */
const sr = ScrollReveal({
    distance: '100px',
    duration: 2400,
    reset: true,
})

sr.reveal(`.home__info`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__info, .project__one-info`, {
    origin: 'left',
})

sr.reveal(`.about__img, .project__one-img-1, .project__one-img-2`, {
    origin: 'right',
    interval: 100, 
})

sr.reveal(`.contact__title, .contact__description, .contact__button`, {
    origin: 'bottom',
    interval: 100, 
})

/* ========== 3D TILT EFFECT ========= */
VanillaTilt.init(document.querySelectorAll(".cs__container"), {
    max: 5,
    speed: 400,
    glare: true,
    "max-glare": .3,
    reverse: true,
});


