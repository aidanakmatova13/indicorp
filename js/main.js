const mobileMenu = document.querySelector('.mobile-menu')
const topMenu = document.querySelector('.top-menu')
const header = document.querySelector('.header')

mobileMenu.addEventListener('click', () => {
    topMenu.classList.toggle('show-menu')
    header.classList.toggle('header-active')
})

const menuLinks = document.querySelectorAll('.top-menu li a')

menuLinks.forEach(element => element.addEventListener('click', () => {
    topMenu.classList.remove('show-menu')
}))

$(document).ready(function($) {
    $('.count-number').counterUp({
        delay: 5,
        time: 3500
    });
});


