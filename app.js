const brd = document.querySelector(".board");
const cards = document.querySelectorAll(".square");
const animals = document.querySelectorAll(".animals");

let flipped = [];

function checkCards(flipped) {
  let matched = false;
  console.log(flipped);

  if (flipped[0].classList[1] === flipped[1].classList[1]) {
    matched = true;
  } else {
    setTimeout(function () {
      flipped[0].querySelector(".animals").classList.add("hidden");
      flipped[1].querySelector(".animals").classList.add("hidden");
    }, 1000);
  }
}
brd.addEventListener("click", function (event) {
  let clickedSqr = event.target;

  //   console.log(clickedSqr);
  let image = clickedSqr.querySelector(".animals");
  if (!clickedSqr.classList.contains("square")) return;
  flipped.push(clickedSqr);
  image.classList.remove("hidden");

  if (flipped.length >= 2) {
    checkCards(flipped);
    flipped = [];
  }

  //   console.log(matched);
  // if the images are matching keep them open
  //if they mismatched
});
