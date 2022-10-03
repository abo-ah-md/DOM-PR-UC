//Define Global Variables

const navList = document.querySelector("#navbar__list");

const sections = document.querySelectorAll("section");

const navSectionLi = document.querySelectorAll(".menu__link");

const winnerdiv = document.querySelector("div");

// End Global Variables

// Begin Main Functions

// Add class 'active' to section when near top of viewport
const scrollFunc = (e) => {
  sections.forEach((section) => {
    let sectionTop = section.getBoundingClientRect().top;
    let sectionBottom = section.getBoundingClientRect().bottom;
    let windowHeight = window.innerHeight;

    if (sectionTop <= 0 || sectionBottom <= windowHeight) {
      // Set sections as active

      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
};
// Scroll to anchor id
const navLinikFunc = (e) => {
  e.preventDefault();

  sections.forEach((section) => {
    if (section.id == e.target.innerHTML) {
      // Scroll to anchor ID using scrollIntoView event
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
};

const clickingUnicornFunc = (e) => {
  console.log("inside click event ");
  winnerdiv.classList.toggle("winner");
};
//End Main Functions

//Begin Events

// make class active on view port
window.addEventListener("scroll", scrollFunc);

// Scroll to section on link click

navList.addEventListener("click", navLinikFunc);

// build the nav

for (let i = 1; i < sections.length + 1; i++) {
  const newLi = document.createElement("li");
  newLi.innerHTML = `<a href="#section${i}">section${i}</a>`;

  // Build menu
  newLi.classList.add("menu__link");
  navList.append(newLi);
}




//Game logic


// emojiFunc deside where the emoji show and disapear
const emojiFunc = () => {
  //randomization
  let randomSection = Math.floor(Math.random() * 4);
 
  let randomShow = Math.floor(Math.random() * 2);

  //checking element exist 
  let unicornExistance = sections[randomSection].innerHTML.includes("🦄");
  

  //random number 1 will create the element and event listner if it doesn't exist 
  if (randomShow === 1 && unicornExistance == false) {

    const emoji = document.createElement("button");

    emoji.id = "unicorn";

    emoji.innerText = "🦄";

    sections[randomSection].appendChild(emoji);

    const unicornId = document.querySelector("button");

    unicornId.addEventListener("click", clickingUnicornFunc);
    
    
  }
  //will remove  the element and event listner if it does exist 
   else if (unicornExistance) {

    const unicornId = document.querySelector("button");

    unicornId.remove();

    unicornId.removeEventListener("click", clickingUnicornFunc);
  }
};

//for gitting the element value
const unicornId = document.querySelector("button");

//initilize the game with a random time intreval 
setInterval(emojiFunc, Math.floor(Math.random() * 10000));
