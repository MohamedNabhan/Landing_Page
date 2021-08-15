/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sectionsList = document.querySelectorAll("section");
const myA = document.querySelectorAll('a[href^="#"]');
console.log(myA);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// 1- build Navbar Menu List
const buildNavbar = () => {
    const navBar = document.querySelector("#navbar__list");
        for (let list of sectionsList) {
          const listName = list.getAttribute("data-nav");
          const listId = listName.replace(/\s/g, '').toLowerCase();
          navBar.innerHTML += `<li><a class='menu__link' href='#${listId}'>${listName}</a></li>`;
        }
    }
// 2- Get Secion Offset // Add Active Class to section // Add Active Class To it's Menu Link
const addActiveClass = () => {
    sectionsList.forEach(section => {
        if(window.scrollY > (section.offsetTop -20) && window.scrollY < (section.offsetTop+section.offsetHeight) -30 ) {
            section.classList.add("your-active-class");
            document.querySelector(`a[href^="#${section.id}"]`).parentElement.classList.add("active");
        } else {
            section.classList.remove("your-active-class");
            document.querySelector(`a[href^="#${section.id}"]`).parentElement.classList.remove("active");
        }
    })
}
    
// 3- Smooth Scroll to section

const smoothScroll = () => {

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNavbar();

// Scroll to anchor && Add class 'active' to section when near top of viewport
document.addEventListener('scroll',addActiveClass);

// Smooth Scroll to section

smoothScroll();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


