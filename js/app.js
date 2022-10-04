//Define Global Variables

const navList = document.querySelector("#navbar__list");

const sections = document.querySelectorAll("section");

let navSectionLi = document.querySelectorAll("menu__link");

const winnerdiv = document.querySelector("div");

const emoji = document.createElement("button");

const unicornId = document.querySelector("button");

// End Global Variables

// Begin Main Functions

// Add class 'active' to section when near top of viewport
const scrollFunc = (e) => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if (sectionTop <= windowHeight && sectionTop >= -50) {
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
  //reassaining querry after DOM is loaded
  navSectionLi = document.querySelectorAll(".menu__link");

  sections.forEach((section) => {
    if (section.id == e.target.innerHTML) {
      // Scroll to anchor ID using scrollIntoView event
      e.target.classList.add("active");
      section.classList.add("your-active-class");
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navSectionLi.forEach((li) => {
        if (li.innerText !== section.id) {
          li.classList.remove("active");
        }
      });
      section.classList.remove("your-active-class");
    }
  });
};

//clicking emoji fuction
const clickingUnicornFunc = (e) => {
  const congratElement = document.createElement("h1");
  congratElement.innerText = "Congrats you have have found our 🦄";
  congratElement.style.cssText = "textAlign: center";
  winnerdiv.append(congratElement);
  winnerdiv.classList.add("winner");
};
//End Main Functions

//Begin Events

// make class active on view port
window.addEventListener("scroll", scrollFunc);

// Scroll to section on link click

setTimeout(navList.addEventListener("click", navLinikFunc), 1000);

// build the nav

for (let i = 1; i < sections.length + 1; i++) {
  const newLi = document.createElement("li");

  newLi.innerHTML = `<a class="menu__link" >section${i}</a>`;
  // Build menu
  navList.append(newLi);
}

//Game logic
//initilize the game with a random time intreval
setInterval((emojiFunc) => {
  // emojiFunc deside where the emoji show and disapear

  //randomization
  const randomSection = Math.floor(Math.random() * 4);

  const randomShow = Math.floor(Math.random() * 2);

  //checking element exist
  const unicornExistance = sections[randomSection].innerHTML.includes("🦄");

  //random number 1 will create the element and event listner if it doesn't exist
  if (randomShow === 1 && unicornExistance == false) {
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
}, Math.floor(Math.random() * 10000));
