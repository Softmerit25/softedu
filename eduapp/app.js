// SCRIPT FOR HEADER SCROLL
window.addEventListener('scroll', () =>{
    const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
});

// SCRIPT FOR MOBILE MENU
const toggleMenu = document.querySelector('.toggle');
const navMenu = document.querySelector('.nav');

    toggleMenu.onclick = () =>{
        toggleMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    }