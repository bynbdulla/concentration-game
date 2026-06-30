const brd = document.querySelector(".board");
const cards = document.querySelectorAll(".square");
const animals = document.querySelectorAll(".animals");
const live = document.querySelectorAll(".live");

let flipped = [];

let lives = 0;
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
    live[lives].style.visibility = "hidden";
    lives++;
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
});

// if lives ===3 or lives >= 3
// then game over - board is disabled or message says game over