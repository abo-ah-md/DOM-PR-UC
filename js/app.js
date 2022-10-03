//Define Global Variables

const navList = document.querySelector("#navbar__list");

const sections = document.querySelectorAll("section");

const navSectionLi = document.querySelectorAll(".menu__link");

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
  document.body.classList.add("winner");
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



let randomSection = Math.floor(Math.random() * 4);

console.log("random section" + randomSection);

const emojiFunc = () => {
  let unicornExistance = sections[randomSection].innerHTML.includes("🦄");

  let randomShow = Math.floor(Math.random() * 2);
  console.log("rando  show" + randomShow);

  if (randomShow === 1 && unicornExistance == false) {
    const emoji = document.createElement("h2");
    emoji.id = "unicorn";
    const unicornId = document.getElementById("unicorn");
    console.log(unicornId);

    emoji.innerText = "🦄";
    

    sections[randomSection].append(emoji);
    

    if (unicornId) {
      unicornId.addEventListener("", clickingUnicornFunc);
    }
  } else if (unicornExistance) {
    console.log("hi");
    console.log(unicornId);
    unicornId.remove();
  }
};

setTimeout(setInterval(emojiFunc, Math.floor(Math.random() * 10000)),0)

