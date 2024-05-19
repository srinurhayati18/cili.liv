// Toggle class active
const navbarNav = document.querySelector
    ('.navbar-nav');
document.querySelector('#sushi-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

// Click on outside sidebar for hide the menu
const sushi = document.querySelector
    ('#sushi-menu');

document.addEventListener('click', function (e) {
    if (!sushi.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})