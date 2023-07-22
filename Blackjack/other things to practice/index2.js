let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]
console.log(featuredPosts[0]);
console.log(featuredPosts[2]);
//challenge:
// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings
let mySkills = ["php","git","html","css","js"];
console.log(mySkills);

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]
//challenge:
// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba
console.log(experience[1]);
console.log(experience[2]);
console.log(experience[0]);
console.log( featuredPosts.length ); //3

//challenge:
// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

let aboutMe = ["noura",22,true];
console.log(aboutMe);

let cards = [4,7];
cards.push(6);
console.log(cards);
//challenge:
// Push the newMessage to the messages array, and then log out the array
let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]
let newMessage = "Same here!"
messages.push(newMessage);
console.log(messages);
//challenge
// How can you remove the last item in an array? Try to google it!
// I searched it , to remove last item we use pop
messages.pop();
console.log(messages);
/////////////////////
//count in java script:
for ( let count = 1 ; count<11;count+=1)
{
    console.log(count);
}
console.log("///");
for( let count = 1; count < 21; count+=1)
{
    console.log(count);
}
console.log("///");

// challange : count from 1 to 20 
for ( let count = 1; count<=20;count+=1)
{
    console.log(count);
}
console.log("///");
for (let i = 0; i < 6; i += 1) {
    console.log(i)
}
console.log("///");

//challenge
// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers
for (let count = 10;count<=100;count+=10)
{
    console.log(count);
}
console.log("///");
let messagess = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear"
]
for(let i = 0;i<5;i+=1)
{
   console.log(messagess[i]);
}
console.log("///");
//challenge:
let myCards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run
for(let i = 0;i<myCards.length;i+=1)
{
    console.log(myCards[i]);
}
console.log("///");
let sentence = ["Hello", "my", "name", "is", "Per"] 
for(let i=0;i<sentence.length;i++){
//document.getElementById("greeting-el").textContent+=sentence[i]+" ";
}
///////
//return:
let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time;
    } else if (player2Time < player1Time) {
        console.log(player2Time)
    } else {
        return player1Time;
    }
}

let fastestRace = getFastestRaceTime()

console.log(fastestRace);
console.log("///");
//challenge:

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function getTotalRaceTime(){
    return player1Time+player2Time;
}
let totalRaceTime =  getTotalRaceTime();
console.log(totalRaceTime);
//random number:
let randomNumber = Math.random();
console.log(randomNumber);
/* 

What does Math.random() do?

Your answer: 
get any number between 0 and 1
*/

let randomNumberu= Math.random() * 6

console.log(randomNumberu)


/* 

In which range will our randomNumber be now?

From: 0
To: 5.9999

*/

let flooredNumber = Math.floor(7.45)

console.log(flooredNumber)


/* 

What does Math.floor() do to positive numbers?

Your answer: removes the decimals from the number

*/

let randomNumberc = Math.floor( Math.random() * 6 )

console.log(randomNumberc)
//challenge:
// Try to modify the expression so that we get a range from 1 to 6
let randomNumberx = Math.floor( Math.random() * 6 )+1

console.log(randomNumberx)
//challenge:
// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice(){
    let randomNumberxx = Math.floor( Math.random() * 6 )+1
    return randomNumberxx;

}
console.log( rollDice() )
//////////
//And operator:
let hasCompletedCourse = true
let givesCertificate = false

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}
////////challenge:
let hasSolvedChallenge = false
let hasHintsLeft = false
// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
function showSolution() {
    console.log("Showing the solution....")
}
if(!hasSolvedChallenge && !hasHintsLeft)
{
    showSolution()
}
/////////// OR operator
let hasCompletedCourse1 = true
let givesCertificate2 = true
if (hasCompletedCourse === true || givesCertificate === false) {
    generateCertificate()
}
function generateCertificate() {
    console.log("Generating certificate....")
}
//challenge
// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
let likesDocumentaries=true;
let likesStartups=false;
if(likesDocumentaries ||likesStartups )
{
    recommendMovie();
}
function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
//////object:
let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}
console.log(course.tags);
//challenge:
// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
    title: "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.png", "img/caste2.png"]
}

console.log(castle.price);
console.log(castle.isSuperHost);
console.log(castle.title);
console.log(castle.images);