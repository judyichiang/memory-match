var mainElem = document.getElementById('gameCards');

mainElem.addEventListener("click", handleClick);

function handleClick(element) {
  // console.log(element.target);
  if (event.target.className.indexOf("card-back") === -1) {
    return;
  }
  element.target.className = 'hidden'

}
