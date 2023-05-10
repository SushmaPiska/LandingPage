












// * Manipulating the DOM exercise.
// * Exercise programmatically builds navigation,
// * scrolls to anchors from navigation,
// * and highlights section in viewport upon scrolling.
// *
// * Dependencies: None
// *
// * JS Version: ES2015/ES6
// *
// * JS Standard: ESlint
// *
// */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
var navv = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const a = ["section1", "section2", "section3", "section4", "section5"];
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
a.forEach((e) => {
  var x = document.createElement("li");
  x.innerHTML = e;
  
  x.addEventListener("click", () => {
    var sec = document.getElementById(e);
    sec.scrollIntoView({ behavior: "smooth" });
    // console.log(sec);

    
    
    sections.forEach((secc) => {
      secc.className = "";
    });
    sec.className = `your-active-class`;
  });

  //x.style.color="black"
  navv.appendChild(x);
});
// Add class 'active' to section when near top of viewport
// remove the active class
const removeActive = (section) => {
  section.classList.remove('your-active-class');
};
// adding the active class
const addActive = (conditional, section) => {
  if(conditional){
      section.classList.add('your-active-class');
  };
};
// Scroll to anchor ID using scrollTO event
const  secAct=()=>{
  sections.forEach(section => {
    const eOffset=Math.floor(section.getBoundingClientRect().top);
    inViewPort=()=> eOffset < 150 && eOffset >= -150
    removeActive(section)
    addActive(inViewPort(),section)
  })
}
window.addEventListener('scroll' ,secAct);
/**
 * End Main Functions
 * Begin Events
 *
 */
// creating button to scroll to top
const botton = document.createElement("button");
botton.innerHTML = "^";
const main = document.querySelector("body");
botton.addEventListener("click", () => {
    document.body.scrollTop=document.documentElement.scrollTop=0
});
botton.className = "btn";
main.appendChild(botton);

// Build menu

// Scroll to section on link click
// Set sections as active
window.addEventListener("scroll",()=>{
      if(window.scrollY==0){
        botton.style.display="none"
    }else{
        botton.style.display="block"
    };
    secAct;
  })

