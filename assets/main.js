// Header
var navbar = document.querySelector('#navbar')
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    console.log(scrollPosition)
    if(scrollPosition >= 100) {
        navbar.classList.add('fixedNavbar')
    }
    else {
        navbar.classList.remove('fixedNavbar')
    }
})