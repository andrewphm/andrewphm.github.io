// Header animation

const logo = document.getElementById('logo');


window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if(scrollY >= 100) {
        logo.innerText = 'ap'
        logo.classList.add('new__logo');
    }
})


