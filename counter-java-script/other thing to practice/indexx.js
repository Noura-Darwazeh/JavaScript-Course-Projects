// the challenge
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

// let name = "noura";
// let greeting = "hi ";
// let theGreet = greeting+name;
// document.getElementById("welcome-el").innerHtml=theGreet;


let welcomeEl = document.getElementById("welcome-el");
let name = "Noura";
let greeting = "hi ";
welcomeEl.innerText = greeting + name;
// to add emoji
welcomeEl.innerText = welcomeEl.innerText + "👋" // or welcomeEl.innerText += "👋"