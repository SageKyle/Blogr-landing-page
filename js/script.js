// UI Variables
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.navigation');
const navHeader = document.querySelectorAll('.navigation__services--header');
const navContent = document.querySelectorAll('.navigation__services--items');

navIcon.addEventListener('mousedown', toggleNav);

// Function to display and hide the Navigation
function toggleNav(e) {
    if (e.target.className === 'fa fa-navicon') {
        e.target.className = 'fa fa-times'
        nav.style.display = 'block';
    } else {
        e.target.className = 'fa fa-navicon'
        nav.style.display = 'none';
    }
};


navHeader.forEach(
    function (navItem) {
        navItem.addEventListener('mousedown', function (){

            if (navItem.classList.contains('open')) {
                navItem.nextElementSibling.style.display = 'none';
                navItem.classList.remove('open')
            } else {
                
                navItem.nextElementSibling.style.display = 'block'
                navItem.classList.add('open');
            }});
});

