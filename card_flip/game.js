console.log("testing");

/// lets start with just "face cards"
// Highest "A" "K" "Q" "J" "10" Lowest

function cardOneFlip() {
  // rndm number between 1 and 5
  let x = Math.floor(Math.random() * 5) + 1;
  console.log(x);
  let c1 = document.getElementById("cardOne");
  c1.innerHTML = x;
}

function cardTwoFlip() {
  let y = Math.floor(Math.random() * 5) + 1;
  console.log(y);
  let c2 = document.getElementById("cardTwo");
  c2.innerHTML = y;
}

function winning(){
    /// if card 1 bigger show >
    /// if card 2 noigger show <
    /// if tie show =
    /// on click or automatic?
}

function flipBoth() {
  let a = Math.floor(Math.random() * 6) + 1;
  let b = Math.floor(Math.random() * 6) + 1;
  console.log(a);
  console.log(b);
  if (a == b) {
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
