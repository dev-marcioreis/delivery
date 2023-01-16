/**********Navbar**********/ 
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


/**********Header**********/ 
const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 100) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})


/**********Search**********/ 
const searchBtn = document.querySelector('.search-btn')
const searchContainer = document.querySelector('.search-container')
const searchSubmitBtn = document.querySelector('.search-submit')
const searchCloseBtn = document.querySelector('.search-close-btn')

const searchBoxElements = [searchBtn, searchSubmitBtn, searchCloseBtn]

for(let i = 0; i < searchBoxElements.length; i++) {
    searchBoxElements[i].addEventListener('click', function() {
        searchContainer.classList.toggle('active')
        document.body.classList.toggle('active')
    })
}


