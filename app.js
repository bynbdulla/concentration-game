const brd = document.querySelector(".board");
const cards = document.querySelectorAll(".square");
const animals = document.querySelectorAll(".animals");

let flipped = [];
let matched = false;

brd.addEventListener("click", function (event) {
  let clickedSqr = event.target;
  let image = clickedSqr.querySelector(".animals");

  if (flipped.length >= 2) {
    return;
  }
  image.classList.remove("hidden");
  flipped.push(clickedSqr);
  console.log(flipped);

let img = image.getAttribute("src")
// if (img )
});
