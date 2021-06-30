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
    distance: '70px',
    duration: 2400,
    reset: true,
})

sr.reveal(`.home__info, .home__img`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__info`, {
    origin: 'left',
})

sr.reveal(`.about__img`, {
    origin: 'right',
    interval: 100, 
})


/* ========== 3D TILT EFFECT ========= */
VanillaTilt.init(document.querySelector(".about__img"), {
    max: 10,
    speed: 400,
    glare: true,
    // "max-glare": 1,
});

