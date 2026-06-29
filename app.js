const brd = document.querySelector(".board");
const sqr = document.querySelectorAll(".square");
// const reset = document.querySelector(".reset");
const animals = document.querySelectorAll(".animals");

let clickedSqr = ''
let flipped = false;
/// let clickedSqr = ''

brd.addEventListener("click", function (event) {
  let clickedSqr = event.target;
  clickedSqr.classList.remove(".hidden");
  console.log(clickedSqr);
  // if (clickedSqr > 2 ){
  //     // clickedSqr.classList.remove('.hidden')
  // }
  // if (clickedSqr === sqr[0] && clickedSqr === sqr[3]){
  // }
});
