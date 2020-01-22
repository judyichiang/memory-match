var mainElem = document.getElementById('gameCards');

mainElem.addEventListener("click", handleClick);

function handleClick(element){
  console.log(element.target);
  element.target.className = 'hidden'

}
