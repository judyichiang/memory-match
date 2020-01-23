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
      console.log("Attempts: ", attempts);
      if (maxMatches === matches) {
        modal.className = "modal-overlay";

      }

      mainElem.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;

    }
    else {
      attempts++;
      console.log("Attempts: ", attempts);
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
