const hamburger = document.querySelector('.navbar__hamburger');
const navbarMenu = document.querySelector('.navbar__menu');

hamburger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
})