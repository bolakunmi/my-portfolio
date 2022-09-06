const light_dark = document.querySelector(".light_dark");
const light = document.querySelector(".light");
const body = document.querySelector("body");
const small_button = document.querySelector(".small_button");
const header = document.querySelector("header");
const nav_toggler_img = document.querySelector(".nav_toggler img");
const nav_list = document.querySelector(".hidden ul");
const selected_item = document.querySelectorAll(".hidden a");
const move_up = document.querySelector(".move_up");
const more = document.querySelector(".more");
const cancel = document.querySelector(".close");
const min_list = document.querySelector(".list");
const background = document.querySelector('.background');

body.style.backgroundColor = "rgb(27, 27, 27)";

const styleLink = document.querySelector('#style')

light_dark.addEventListener('click', function () {

  if (styleLink.getAttribute('href') == 'style.css') {
    styleLink.setAttribute('href', 'style2.css');
    localStorage.clear()
    localStorage.setItem('mode', 'light')

  } else {
    styleLink.setAttribute('href', 'style.css');
    localStorage.clear()
    localStorage.setItem('mode', 'dark')

  }
})

if (localStorage.getItem('mode') == 'dark') {
  styleLink.setAttribute('href', 'style.css');
} else {
  styleLink.setAttribute('href', 'style2.css');
}



// light_dark.addEventListener("click", function () {
//   if (body.style.backgroundColor == "rgb(216, 216, 216)") {
//     // change the image src
//     body.style.backgroundColor = "rgb(27, 27, 27)";
//     body.style.color = " rgb(216, 216, 216)";
//     move_up.src = "./icons8-up-48 (1).png";
//     light.src = "./moon.png";
//     light.style = "box-shadow: 0px 0px 20px 5px white"
//     background.src = "./dark_background.jpg"
//   } else if ((body.style.backgroundColor = "rgb(27, 27, 27)")) {
//     light.src = "./sun.png";
//     light.style = "box-shadow: 0px 0px 20px 5px #fcca38;"
//     body.style.backgroundColor = "rgb(216, 216, 216)";
//     body.style.color = "rgb(27, 27, 27)";
//     move_up.src = "./icons8-up-48.png";
//     background.src = "./light_background.jpg"
//   }
// });

move_up.addEventListener("click", function () {
  window.scrollTo(0, 0);
});


// to jump around selected items
for (let i = 0; i < 3; i++) {
  nav_list.children[i].addEventListener("click", function () {
    for (let j = 0; j < 3; j++) {
      nav_list.children[j].classList.remove("selected");
    }
    nav_list.children[i].classList.add("selected");
  });
}

for (let i = 0; i < 3; i++) {
  min_list.children[i].addEventListener("click", function () {
    for (let j = 0; j < 3; j++) {
      min_list.children[j].classList.remove("selected");
    }
    min_list.children[i].classList.add("selected");
  });
}



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel);