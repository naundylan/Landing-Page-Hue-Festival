// Header
var navbar = document.querySelector('#navbar')
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    // console.log(scrollPosition)
    if(scrollPosition >= 100) {
        navbar.classList.add('fixedNavbar')
    }
    else {
        navbar.classList.remove('fixedNavbar')
    }
})

// Open & close menu
var overlay = document.querySelector('.overlay');
var dropdownMenu = document.querySelector('.dropdown-menu');
var openBtn = document.querySelector('.open-btn');

// console.log('Overlay:', overlay);
// console.log('Dropdown Menu:', dropdownMenu);
// console.log('Open Button:', openBtn);

if (openBtn) {
    openBtn.addEventListener('click', function() {
        overlay.classList.remove('disabled');
    });
}

if (overlay) {
    overlay.addEventListener('click', function(e) {
        dropdownMenu.classList.remove('show');
        overlay.classList.add('disabled');
    });
}