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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const t1 = performance.now();

const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
let windowHeight = window.innerHeight;
let sectionTop = section.getBoundingClientRect().top;



const navSectionLi = document.querySelectorAll(".menu__link");

const removeAndAddActive = (e) => {
  if (e.target) {
    console.log(e);
    /*

e.target.attributes.href.value
    sections.forEach(section => {
        if (condition) {
            
        }
       });
  */
  }
};


sections;
window.addEventListener("scroll", scrollFunc);

document.addEventListener("click", removeAndAddActive);

const t2 = performance.now();

console.log(t2 - t1);
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const scrollFunc= (e)=>{
    
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

for (let i = 1; i < sections.length + 1; i++) {
  const newLi = document.createElement("li");
  newLi.innerHTML = `<a href="#section${i}">section${i}</a>`;
  newLi.classList.add("menu__link");
  navList.append(newLi);
}

// Add class 'active' to section when near top of viewport







// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
