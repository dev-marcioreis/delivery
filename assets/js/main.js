const navbar = document.querySelector('.navbar')
const navbarLinks = document.querySelector('.navbar-link')
const menuToggleBtn = document.querySelector('.nav-toggle-btn')

menuToggleBtn.addEventListener('click', function() {
    navbar.classList.toggle('active')
    this.classList.toggle('active')
});

navbar.addEventListener('click', () => {
    navbar.classList.remove('active')
    menuToggleBtn.classList.toggle('active')
})

const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 100) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})