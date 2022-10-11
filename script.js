const image = document.querySelector('#myImage');
const text = document.querySelector('h2');

const btnOne = document.querySelector('#one');
const btnTwo = document.querySelector('#two');

btnOne.addEventListener('click', first);
btnTwo.addEventListener('click', noFirst);

function first() {
  image.setAttribute("src", "./style/photo2.webp");
  text.innerHTML = "Did you see all popular places?";
  btnOne.innerHTML = "Yes!";
  btnTwo.innerHTML = "No!";

  btnOne.addEventListener('click', allPopular);
  btnTwo.addEventListener('click', notPopular);
}