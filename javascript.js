const toggler = document.querySelector(".light_dark");
const light = document.querySelector(".light");
const body = document.querySelector("body");
const small_button = document.querySelector(".small_button");
const header = document.querySelector("header");
const nav_toggler = document.querySelector(".nav_toggler");
const nav_list = document.querySelector(".hidden ul");
const selected_item = document.querySelectorAll(".hidden a");
const move_up = document.querySelector(".move_up");

body.style.backgroundColor = "black";
toggler.addEventListener("click", function () {
  if (body.style.backgroundColor == "white") {
    // change the image src
    body.style.backgroundColor = "black";
    body.style.color = "white";
    move_up.src = "./icons8-up-48 (1).png"
    light.src = "./lightbulb-off-fill.svg";

  } else if (body.style.backgroundColor = "black") {
    light.src = "./lightbulb.svg";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    move_up.src = "./icons8-up-48.png";
    light.src = "./lightbulb.svg";

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



// to jump around selected items
for (let i = 0; i < 3; i++) {
  nav_list.children[i].addEventListener("click", function () {
    for (let j = 0; j < 3; j++) {
      nav_list.children[j].classList.remove("selected");
    }
    nav_list.children[i].classList.add("selected");
  });
}
