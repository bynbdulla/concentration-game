const brd = document.querySelector(".board");
const cards = document.querySelectorAll(".square");
const animals = document.querySelectorAll(".animals");
const live = document.querySelectorAll(".live");
const name = document.querySelector("#name");
const restart = document.querySelector(".restart");
const msg = document.querySelector("#message");
console.log(cards);

msg.style.display = "none";
let lives = 0;
let flipped = [];

function checkCards(flipped) {
  let matched = false;
  console.log(flipped);

  if (flipped[0].classList[1] === flipped[1].classList[1]) {
    matched = true;
    flipped[0].style.backgroundColor = "#D6D6D6";
    flipped[1].style.backgroundColor = "#D6D6D6";
  } else {
    name.textContent = "Ooops 🥲";

    setTimeout(function () {
      flipped[0].querySelector(".animals").classList.add("hidden");
      flipped[1].querySelector(".animals").classList.add("hidden");
      name.textContent = "FOCUS 👀";
    }, 1000);

    live[lives].style.visibility = "hidden";
    lives++;
  }
}
brd.addEventListener("click", function (event) {
  let clickedSqr = event.target;
  //   emojiH.classList.remove('disable')
  //   console.log(clickedSqr);
  let image = clickedSqr.querySelector(".animals");
  if (!clickedSqr.classList.contains("square")) return;
  flipped.push(clickedSqr);
  image.classList.remove("hidden");

  if (flipped.length >= 2) {
    checkCards(flipped);
    flipped = [];
  }
  if (lives === 5) {
    setTimeout(function () {
      name.textContent = "";
    }, 1000);
    msg.style.display = "flex";
    brd.classList.add("disable");
  }
});

restart.addEventListener("click", function () {
  msg.style.display = "none";
  lives = 0;
  flipped = [];
  brd.classList.remove("disable");
  name.textContent = "Flip 2 cards and find pairs";
  live.forEach(function (chance) {
    chance.style.visibility = "visible";
  });
  cards.forEach(function(sqr){
    sqr.querySelector('.animals').classList.add("hidden")
    sqr.style.backgroundColor = ''
  })
});
// sqr.forEach(function (square) {
//     square.textContent = "";
//     square.classList.remove("disable");
//   });
//   //   plX = true;
//   //   plO = false;
//   msg.textContent = "Player X, it's your turn";
//   brd.classList.remove("disable");
//   plX = true;
