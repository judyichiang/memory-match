var mainElem = document.getElementById('gameCards');
mainElem.addEventListener("click", handleClick);

var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;

function handleClick(event) {
  // console.log(event.target);
  if (event.target.className.indexOf("card-back") === -1) {
    return;
  }
  event.target.className += ' hidden';

  if (!firstCardClicked) {
    firstCardClicked = event.target;
    // console.log(firstCardClicked )
    firstCardClasses = firstCardClicked.previousElementSibling.className;
    // console.log(firstCardClasses);

  } else {
    secondCardClicked = event.target;

    mainElem.removeEventListener("click", handleClick);


    // console.log(secondCardClicked)
    secondCardClasses = secondCardClicked.previousElementSibling.className;
    // console.log(secondCardClasses);
    if (firstCardClasses === secondCardClasses) {
      console.log("The images match")
      mainElem.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;


    }
    else {
      console.log("The images do not match")

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
