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
light_dark.addEventListener("click", function () {
  if (body.style.backgroundColor == "rgb(216, 216, 216)") {
    // change the image src
    body.style.backgroundColor = "rgb(27, 27, 27)";
    body.style.color = " rgb(216, 216, 216)";
    move_up.src = "./icons8-up-48 (1).png";
    light.src = "./moon.png";
    light.style = "box-shadow: 0px 0px 20px 5px white"
    background.src = "./dark_background.jpg"
  } else if ((body.style.backgroundColor = "rgb(27, 27, 27)")) {
    light.src = "./sun.png";
    light.style = "box-shadow: 0px 0px 20px 5px #fcca38;"
    body.style.backgroundColor = "rgb(216, 216, 216)";
    body.style.color = "rgb(27, 27, 27)";
    move_up.src = "./icons8-up-48.png";
    background.src = "./light_background.jpg"
  }
});

move_up.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// toggler display for nav bar
// nav_list.style.display = "none";
// nav_toggler.addEventListener("click", function () {
//   if (nav_list.style.display == "none") {
//     console.log("visible");
//     nav_list.style.display = "block";
//   } else if (nav_list.style.display == "block") {
//     console.log("hidden");
//     if (window.innerWidth < 800) {
//       nav_list.style.display = "none";
//     } else {
//       nav_list.style.display = "block";
//     }
//   }
// });

// nav_toggler_img.addEventListener("click", function () {
//   if (nav_toggler_img.src = "./more.png") {
//     nav_toggler_img.src = "./close.png"
//     console.log('close')

//   } else if (nav_toggler_img.src = "./close.png") {
//     nav_toggler_img.src = "./more.png"
//     console.log('display')
//   }
// })

/* nav_toggler.addEventListener("click", function () {
if (nav_toggler.backgroundColor = url("./more.png")) {
  nav_toggler.backgroundColor = url("./close.png")
  console.log('close')

} else if (nav_toggler.backgroundColor = url("./more.png")) {
  nav_toggler.backgroundColor = url("./more.png")
  console.log('display more')
}
})*/

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

// let options = "more"
// nav_toggler_img.addEventListener("click", function () {
//   if (options == "more") {
//     more.style.src = "./more.png"
//     console.log(options)
//     options = "close";
//   } else if (options == "close") {
//     more.style.src = "./close.png"

//     console.log("it shoudl go back")
//     options = "more"
//   }

// })

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