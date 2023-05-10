var navv = document.querySelector("#navbar__list");
// console.log(nav)
a = ["section1", "section2", "section3", "section4", "section5"];
const sections = document.querySelectorAll("section");
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
// remove the active class
const removeActive = (section) => {
  section.classList.remove('your-active-class');
  // section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// adding the active class
const addActive = (conditional, section) => {
  if(conditional){
      section.classList.add('your-active-class');
      // section.style.cssText = "background-color: yellow;";
  };
};
const  secAct=()=>{
  sections.forEach(section => {
    const eOffset=Math.floor(section.getBoundingClientRect().top);
    inViewPort=()=> eOffset < 150 && eOffset >= -150
    removeActive(section)
    addActive(inViewPort(),section)
  })
}
window.addEventListener('scroll' ,secAct);


const botton = document.createElement("button");
botton.innerHTML = "^";
const main = document.querySelector("body");
botton.addEventListener("click", () => {
    document.body.scrollTop=document.documentElement.scrollTop=0
    // document.body.scrollIntoView({ behavior: "smooth" });
});
botton.className = "btn";
main.appendChild(botton);
window.addEventListener("scroll",()=>{
      if(window.scrollY==0){
        botton.style.display="none"
    }else{
        botton.style.display="block"
    };
    secAct;

})



// var x=document.createElement("li")
// x.innerHTML="section1"
// x.style.color="black"

//nav.appendChild(x)

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
