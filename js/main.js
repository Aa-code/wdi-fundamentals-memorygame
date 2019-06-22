

var cards = ["queen","queen","king","king"];

var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);


console.log("User flipped " + cardsInPlay);
console.log("User flipped " + cardsInPlay);

if (cardsInPlay[cardsInPlay.length] === 2);
{
  if (cardsInPlay[0] === cardsInPlay[1])
    alert("You found a match!");
  else if (cardsInPlay != cardsInPlay[1]);
    alert("Sorry, try again.");
}
