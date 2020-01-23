var mainElem = document.getElementById('gameCards');
mainElem.addEventListener("click", handleClick);

var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;

var maxMatches = 9;
var matches = 0;

var modal = document.querySelector('.modal-overlay');


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
      // console.log("matches variables: ", matches);
      if (maxMatches === matches){
        // console.log("You have won!!")
        modal.className = "modal-overlay";

      }



        mainElem.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;

    }
    else {
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
