
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

let trollButton = document.querySelector('#trollButton')
let compteur = 0;
trollButton.addEventListener('mouseover', ()=> {
  let randNumber = (Math.round((Math.random() * 100)));
  trollButton.style.top = randNumber + "%";
  randNumber = (Math.round((Math.random() * 100)));
  trollButton.style.left = randNumber + "%";
  compteur++
  if ((compteur % 5) == 0) {
    randInsult = insultArray[(Math.round((Math.random() * 4)))];
    alert(randInsult);
  }
})
let randInsult;
let insultArray = ["You need to be fast enough for this to work, keep trying!", "It's all about agility", "People that are over 60 years old generally can't do it", "Do this exercise every morning to improve your self-esteem", "It has been shown that there is a big correlation between the skill you showcase here and your penis size"]
