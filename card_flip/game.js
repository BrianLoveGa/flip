console.log("testing");

/// lets start with just "face cards"
// Highest "A" "K" "Q" "J" "10" Lowest
// goal
// 1 button turn over left card
// & 1 button turn over right card
// & 1 button turn both over at once
// 3 button so far
// show which is bogger
// show card value
// animate show card

let c1 = document.getElementById("cardOne");
let c2 = document.getElementById("cardTwo");

let cardValueOne = 0;
let cardValueTwo = 0;

let sign = document.getElementById("win");

let aces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let decklength = aces.length;
console.log(decklength);

function winning() {
  /// if card 1 bigger show >
  /// if card 2 bigger show <
  /// if tie show =
  /// on click or automatic?
  // auto - call after click functions
  // declare above
  console.log("c1 value");
  console.log(cardValueOne);
  console.log("c2 value");
  console.log(cardValueTwo);
  if (cardValueTwo === cardValueOne) {
    sign.innerHTML = "=";
  } else if (cardValueOne > cardValueTwo) {
    sign.innerHTML = ">";
  } else {
    sign.innerHTML = "<";
  }
}

function cardOneFlip() {
  // rndm number between 1 and 5
  let x = Math.floor(Math.random() * 13) + 1;
  console.log(x);
  c1.innerHTML = aces[x - 1];
  cardValueOne = x;
  winning();
}

function cardTwoFlip() {
  let y = Math.floor(Math.random() * 13) + 1;
  console.log(y);
  c2.innerHTML = aces[y - 1];
  cardValueTwo = y;
  winning();
}

function flipBoth() {
  let a = Math.floor(Math.random() * 13) + 1;
  let b = Math.floor(Math.random() * 13) + 1;
  console.log(a);
  console.log(b);
  c1.innerHTML = aces[a - 1];
  cardValueOne = a;
  c2.innerHTML = aces[b - 1];
  cardValueTwo = b;
  winning();
}
