var mainElem = document.getElementById('gameCards');

mainElem.addEventListener("click", handleClick);

function handleClick(event) {
  // console.log(event.target);
  if (event.target.className.indexOf("card-back") === -1) {
    return;
  }
  event.target.className += ' hidden'

}
