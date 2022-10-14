const image = document.querySelector('#myImage');
const text = document.querySelector('h2');

const btnOne = document.querySelector('#one');
const btnTwo = document.querySelector('#two');

btnOne.addEventListener('click', first);
btnTwo.addEventListener('click', noFirst);

function first() {
  image.setAttribute("src", "./style/photo4.jpeg");
  text.innerHTML = "What would you like to see?";
  btnOne.innerHTML = "Museum!";
  btnTwo.innerHTML = "The City!";

  btnOne.addEventListener('click', museum);
  btnTwo.addEventListener('click', theCity);
}

function museum(){
window.open('https://www.tripadvisor.com/Attractions-g60763-Activities-c49-New_York_City_New_York.html');
}

function theCity(){
window.open('https://www.10adventures.com/city-walks/new-york-city/');
}

function noFirst() {
  image.setAttribute("src", "./style/photo2.webp");
  text.innerHTML = "Did you see all popular places?";
  btnOne.innerHTML = "Yes!";
  btnTwo.innerHTML = "No!";

  btnOne.addEventListener('click', allPopular);
  btnTwo.addEventListener('click', notPopular);
}

function allPopular() {
  image.setAttribute("src", "./style/photo3.jpeg");
  text.innerHTML = "Recomendation for your trip";
  btnOne.innerHTML = "Trip 1!";
  btnTwo.innerHTML = "Trip 2!";

  btnOne.addEventListener('click', tripOne);
  btnTwo.addEventListener('click', tripTwo);
}

function tripOne(){
  window.open('https://www.tripsavvy.com/things-not-to-do-in-nyc-1613664');
}

function tripTwo(){
  window.open('https://www.marcofeng.com/usa/best-non-touristy-things-to-do-in-nyc');
}

function notPopular() {
  image.setAttribute("src", "./style/photo5.jpeg");
  text.innerHTML = "What would you like to see?";
  btnOne.innerHTML = "Museum!";
  btnTwo.innerHTML = "The City!";

  btnOne.addEventListener('click', museum);
  btnTwo.addEventListener('click', theCity);
}
