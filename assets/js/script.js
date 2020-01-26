var mainElem = document.getElementById('gameCards');
mainElem.addEventListener("click", handleClick);

var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;

var maxMatches = 9;
var matches = 0;

var modal = document.querySelector('.modal-overlay');

var attempts = 0;
var gamesPlayed = 0;

var playedElem = document.getElementById('games-played');
var attemptsElem = document.getElementById('attempts');
var accuracyElem = document.getElementById('accuracy');

var button = document.getElementById("resetButton");
button.addEventListener("click", resetGame);

function handleClick(event) {

  if (event.target.className.indexOf("card-back") === -1) {
    return;
  }
  event.target.className += ' hidden';
  if (!firstCardClicked) {
    firstCardClicked = event.target;
    firstCardClasses = firstCardClicked.previousElementSibling.className;

  } else {
    secondCardClicked = event.target;

    mainElem.removeEventListener("click", handleClick);

    secondCardClasses = secondCardClicked.previousElementSibling.className;

    if (firstCardClasses === secondCardClasses) {
      matches++;
      attempts++;
      displayStats();
      if (maxMatches === matches) {
        modal.className = "modal-overlay";

      }

      mainElem.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;

    }
    else {
      attempts++;
      displayStats();
      setTimeout(function () {
        firstCardClicked.classList.remove("hidden");
        secondCardClicked.classList.remove("hidden");

        mainElem.addEventListener("click", handleClick);
        firstCardClicked = null;
        secondCardClicked = null;

      }, 1500);
    }
  }
}

function displayStats() {
  playedElem.textContent = gamesPlayed;
  attemptsElem.textContent = attempts;
  accuracyElem.textContent = calculateAccuracy(attempts, matches) + "%";
}

function calculateAccuracy(attempts, matches) {
  if (attempts === 0) {
    return 0;
  }
  else {
    return Math.trunc((matches / attempts) * 100);
  }
}



function resetGame() {
  attempts = 0;
  matches = 0;
  gamesPlayed++;
  displayStats();
  modal.className += " hidden";
  resetCards()

}

function resetCards() {
  var hiddenCards = document.querySelectorAll(".card-back")
  console.log(hiddenCards)
  for (var i = 0; i < hiddenCards.length; i++) {
    hiddenCards[i].classList.remove("hidden");
  }
}

var cards = [
  "netflix",
  "disney",
  "hbo",
  "amazon",
  "hulu",
  "thanos",
  "youtube",
  "cbs",
  "anime",
  "netflix",
  "disney",
  "hbo",
  "amazon",
  "hulu",
  "thanos",
  "youtube",
  "cbs",
  "anime",
];


var cardFront = document.querySelectorAll("div.card-front");
// console.log(cardFront);

var newCards =[];

function shuffle() {
  for (var i = 0; i < cards.length; i++) {
    const swapIndex = Math.floor(Math.random() * cards.length)
    const currentCard = cards[i]
    const cardToSwap = cards[swapIndex]
    cards[i] = cardToSwap
    cards[swapIndex] = currentCard;
    // console.log(cards[i]);
    newCards.push(cards[i])
    for (var k = 0; k < cardFront.length; k++) {
      console.log(cardFront[k].className);

    }

    // var cardDeck = document.createElement('div');
    // cardDeck.className = cards[i];
    // container.appendChild(cardDeck);
  }

}
shuffle();

console.log(newCards);

// for(var k = 0; k <cardFront.length; k++){
//   console.log(cardFront[k].className);

// }
