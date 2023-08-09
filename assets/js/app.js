// ======== MENU SHOW Y HIDDEN
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// ======= MENU SHOW 
// VALIDATE IF CONSTAN EXISTS
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

// menu hiden
// validate if constant exists
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


  // GALLERY SWIPER
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

//  navbar
function changeBg(){
  var navbar = document.getElementById('header');
  var scrollValue = window.scrollY
  if(scrollValue < 900){
    navbar.classList.remove('bgColor');
  } else{
    navbar.classList.add('bgColor');
  }
}

window.addEventListener('scroll', changeBg)



// MORE OR LESS BUTTON filmography 
function toggleText() {
      
  // Get all the elements from the page
  var points = 
      document.getElementById("points");

  var showMoreText =
      document.getElementById("moreText");

  var buttonText =
      document.getElementById("textButton");

  // If the display property of the dots 
  // to be displayed is already set to 
  // 'none' (that is hidden) then this 
  // section of code triggers
  if (points.style.display === "none") {

      // Hide the text between the span
      // elements
      showMoreText.style.display = "none";

      // Show the dots after the text
      points.style.display = "inline";

      // Change the text on button to 
      // 'Show More'
      buttonText.innerHTML = "еще";
  }

  // If the hidden portion is revealed,
  // we will change it back to be hidden
  else {

      // Show the text between the
      // span elements
      showMoreText.style.display = "inline";

      // Hide the dots after the text
      points.style.display = "none";

      // Change the text on button
      // to 'Show Less'
      buttonText.innerHTML = "скрыть";
  }
}

// MORE OR LESS BUTTON Theatre
function toggleTextTwo() {
      
  // Get all the elements from the page
  var points = 
      document.getElementById("points2");

  var showMoreText =
      document.getElementById("moreText2");

  var buttonText =
      document.getElementById("textButton2");

  // If the display property of the dots 
  // to be displayed is already set to 
  // 'none' (that is hidden) then this 
  // section of code triggers
  if (points.style.display === "none") {

      // Hide the text between the span
      // elements
      showMoreText.style.display = "none";

      // Show the dots after the text
      points.style.display = "inline";

      // Change the text on button to 
      // 'Show More'
      buttonText.innerHTML = "еще";
  }

  // If the hidden portion is revealed,
  // we will change it back to be hidden
  else {

      // Show the text between the
      // span elements
      showMoreText.style.display = "inline";

      // Hide the dots after the text
      points.style.display = "none";

      // Change the text on button
      // to 'Show Less'
      buttonText.innerHTML = "скрыть";
  }
}