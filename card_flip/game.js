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
// currently playing with unli mited decks
// how to limit to multiples of 52?
// lets limit it to one to start

let c1 = document.getElementById("cardOne");
let c2 = document.getElementById("cardTwo");

let cardValueOne = 0;
let cardValueTwo = 0;

let sign = document.getElementById("win");

let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let spades = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let hearts = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let clubs = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let diamonds = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

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
  // rndm number between 1 and 52
  let x = Math.floor(Math.random() * 52) + 1;
  console.log(x);
  if (x <= 13) {
    c1.innerHTML = "Spade " + spades[x - 1];
    cardValueOne = value[x - 1];
  } else if (x >= 14 && x <= 26) {
    c1.innerHTML = "Heart " + hearts[x - 14];
    cardValueOne = value[x - 14];
  } else if (x >= 27 && x <= 39) {
    c1.innerHTML = "Club " + clubs[x - 27];
    cardValueOne = value[x - 27];
  } else {
    c1.innerHTML = "Diamond " + diamonds[x - 40];
    cardValueOne = value[x - 40];
  }

  winning();
}

function cardTwoFlip() {
  let y = Math.floor(Math.random() * 52) + 1;
  console.log(y);
  if (y <= 13) {
    c2.innerHTML = "Spade " + spades[y - 1];
    cardValueTwo = value[y - 1];
  } else if (y >= 14 && y <= 26) {
    c2.innerHTML = "Heart " + hearts[y - 14];
    cardValueTwo = value[y - 14];
  } else if (y >= 27 && y <= 39) {
    c2.innerHTML = "Club " + clubs[y - 27];
    cardValueTwo = value[y - 27];
  } else {
    c2.innerHTML = "Diamond " + diamonds[y - 40];
    cardValueTwo = value[y - 40];
  }

  winning();
}

function flipBoth() {
  cardOneFlip();
  cardTwoFlip();
}
