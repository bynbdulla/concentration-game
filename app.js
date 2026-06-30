const brd = document.querySelector(".board");
const cards = document.querySelectorAll(".square");
const animals = document.querySelectorAll(".animals");

let flipped = [];
let matched = false;

brd.addEventListener("click", function (event) {
  let clickedSqr = event.target;
  console.log(clickedSqr);

  let image = clickedSqr.querySelector(".animals");

  if (!clickedSqr.classList.contains("square")) return;

  if (flipped.length >= 2) {
    flipped = [];
  }
  image.classList.remove("hidden");
  flipped.push(clickedSqr);
  console.log(flipped.length);
  console.log(flipped);

  if (
    flipped[0].classList.contains("parrot") ===
    flipped[1].classList.contains("parrot")
  ) {
    let matched = true;
  } else if (
    flipped[0].classList.contains("tiger") ===
    flipped[1].classList.contains("tiger")
  ) {
    let matched = true;
  } else if (
    flipped[0].classList.contains("cow") ===
    flipped[1].classList.contains("cow")
  ) {
    let matched = true;
  } else if (
    flipped[0].classList.contains("bee") ===
    flipped[1].classList.contains("bee")
  ) {
    let matched = true;
  } else if (
    flipped[0].classList.contains("hedgehog") ===
    flipped[1].classList.contains("hedgehog")
  ) {
    let matched = true;
  } else if (
    flipped[0].classList.contains("chick") ===
    flipped[1].classList.contains("chick")
  ) {
    let matched = true;
  } else if (
    flipped[0].classList.contains("giraffe") ===
    flipped[1].classList.contains("giraffe")
  ) {
    let matched = true;
    console.log(matched);
    console.log(giraffe);
  } else if (
    flipped[0].classList.contains("turtle") ===
    flipped[1].classList.contains("turtle")
  ) {
    let matched = true;
  }

  console.log(matched);
  // if the images are matching keep them open
  //if they mismatched
});
