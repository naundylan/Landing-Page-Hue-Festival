// Declare variables
var navbar = document.querySelector('#navbar');
var overlay = document.querySelector('.overlay');
var dropdownMenu = document.querySelector('.dropdown-menu');
var openBtn = document.querySelector('.open-btn');
var closeBtn = document.querySelector('.close-btn')

// Header
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    if(scrollPosition >= 100) {
        navbar.classList.add('fixedNavbar');
    } else {
        navbar.classList.remove('fixedNavbar');
    }
});

// Open & close menu
if (openBtn) {
    openBtn.addEventListener('click', function() {
        console.log('Button clicked')
        overlay.classList.remove('disabled');
        dropdownMenu.classList.add('show');
    });
}

if (overlay) {
    overlay.addEventListener('click', function(e) {
        dropdownMenu.classList.remove('show');
        overlay.classList.add('disabled');
    });
}

// Close dropdown menu
if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        dropdownMenu.classList.remove('show');
        overlay.classList.add('disabled')
    })
}