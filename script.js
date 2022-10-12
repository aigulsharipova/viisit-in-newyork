const image = document.querySelector('#myImage');
const text = document.querySelector('h2');

const btnOne = document.querySelector('#one');
const btnTwo = document.querySelector('#two');

btnOne.addEventListener('click', first);
//btnTwo.addEventListener('click', noFirst);

function first() {
  image.setAttribute("src", "./style/photo3.jpeg");
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
