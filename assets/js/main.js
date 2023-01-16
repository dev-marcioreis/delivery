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

