"use strict";

var light_dark = document.querySelector(".light_dark");
var light = document.querySelector(".light");
var body = document.querySelector("body");
var small_button = document.querySelector(".small_button");
var header = document.querySelector("header");
var nav_toggler_img = document.querySelector(".nav_toggler img");
var nav_list = document.querySelector(".hidden ul");
var selected_item = document.querySelectorAll(".hidden a");
var move_up = document.querySelector(".move_up");
var more = document.querySelector(".more");
var cancel = document.querySelector(".close");
var min_list = document.querySelector(".list");
var background = document.querySelector('.background');
body.style.backgroundColor = "rgb(27, 27, 27)";
var styleLink = document.querySelector('#style');
light_dark.addEventListener('click', function () {
  if (styleLink.getAttribute('href') == 'style.css') {
    styleLink.setAttribute('href', 'style2.css');
    localStorage.clear();
    localStorage.setItem('mode', 'light');
    light.src = "./sun.png";
    light.style = "box-shadow: 0px 0px 20px 5px #fcca38;";
    body.style.backgroundColor = "rgb(216, 216, 216)";
    body.style.color = "rgb(27, 27, 27)";
    move_up.src = "./icons8-up-48.png";
    background.src = "./light_background.jpg";
  } else {
    styleLink.setAttribute('href', 'style.css');
    localStorage.clear();
    localStorage.setItem('mode', 'dark');
    body.style.backgroundColor = "rgb(27, 27, 27)";
    body.style.color = " rgb(216, 216, 216)";
    move_up.src = "./icons8-up-48 (1).png";
    light.src = "./moon.png";
    light.style = "box-shadow: 0px 0px 20px 5px white";
    background.src = "./dark_background.jpg";
  }
});

if (localStorage.getItem('mode') == 'dark') {
  styleLink.setAttribute('href', 'style.css');
} else {
  styleLink.setAttribute('href', 'style2.css');
} // light_dark.addEventListener("click", function () {
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
}); // to jump around selected items

var _loop = function _loop(i) {
  nav_list.children[i].addEventListener("click", function () {
    for (var j = 0; j < 3; j++) {
      nav_list.children[j].classList.remove("selected");
    }

    nav_list.children[i].classList.add("selected");
  });
};

for (var i = 0; i < 3; i++) {
  _loop(i);
}

var _loop2 = function _loop2(_i) {
  min_list.children[_i].addEventListener("click", function () {
    for (var j = 0; j < 3; j++) {
      min_list.children[j].classList.remove("selected");
    }

    min_list.children[_i].classList.add("selected");
  });
};

for (var _i = 0; _i < 3; _i++) {
  _loop2(_i);
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
var myCarousel = document.querySelector('#myCarousel');
var carousel = new bootstrap.Carousel(myCarousel);