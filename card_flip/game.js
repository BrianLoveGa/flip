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
  let x = Math.floor(Math.random() * 5) + 1;
  console.log(x);
  c1.innerHTML = x;
  cardValueOne = x;
  winning();
}

function cardTwoFlip() {
  let y = Math.floor(Math.random() * 5) + 1;
  console.log(y);
  c2.innerHTML = y;
  cardValueTwo = y;
  winning();
}

function flipBoth() {
  let a = Math.floor(Math.random() * 6) + 1;
  let b = Math.floor(Math.random() * 6) + 1;
  console.log(a);
  console.log(b);
  c1.innerHTML = a;
  cardValueOne = a;
  c2.innerHTML = b;
  cardValueTwo = b;
  winning();
  if (a === b) {
    console.log("tie");
    return "it's a tie";
  } else if (a > b) {
    console.log("card 1");
    return "Card One Wins";
  } else {
    console.log("card 2");
    return "Card Two Wins";
  }
}
