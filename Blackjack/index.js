//let firstCard = 4;
//let secondCard = 10;
// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
// let cards = [firstCard,secondCard];
let cards = [];
//let sum = firstCard + secondCard;
let sum =0;
//console.log(sum);
// let playerName = "Per"
// let playerChips = 145
//use object:
let player = {
    name: "noura",
    chips: 140,
    sayHello: function(){
       
            console.log("Heisann!")
}
}
//document.getElementById("player-el").textContent = player.name + ": $" + player.chips
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard(){
    var num = Math.floor(Math.random()*13)+1;
    if(num === 1)
    return 11;
    else if(num >10)
    return 10;
    else return num;
}
if(sum<21)
{
    console.log("Do you want to draw a new card? 🙂")
}
else if(sum === 21)
{
    console.log("Wohoo! You've got Blackjack! 🥳")
}
else if(sum>21)
{
    console.log("You're out of the game! 😭");
}
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
let age=22;
if(age>=21)
{
    console.log("Welcome!");
}
else
console.log("You can not enter the club!");
// Check if the person is elegible for a birthday card from the King! (100)
let agee=100;
if(agee===100)
{
    console.log("Here is your birthday card from the King!");
}
else if(agee<100)
{
    console.log("Not elegible");
}
else{
    console.log("Not elegible, you have already gotten one");
}
// Write the conditional according to these rules:
// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"
let hasBlackJack = false;
// 1. Create a variable called isAlive and assign it to true

// 2. Flip its value to false in the appropriate code block 

let isAlive = false;
//new challange
// 1. Declare a variable called message and assign its value to an empty string

// 2. Reassign the message variable to the string we're logging out
let message = "";
if(sum<=20)
{ 
    message="Do you want to draw a new card? 🙂";
}
else if(sum === 21)  
{
    message="Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
}
else{
    message="You're out of the game! 😭";
    isAlive=true;
}
console.log(message);
console.log(hasBlackJack);
console.log(isAlive);
console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false
// let messageEl = document.getElementById("message-el");
//console.log(messageEl);
// let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
// let cardsEl = document.getElementById("cards-el");
function startGame(){
    isAlive=true;
    //challenge 
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard+secondCard;
    renderGame();
}
function renderGame(){
    if(sum<=20)
    {
        message="Do you want to draw a new card?";
    }
    else if(sum === 21)  
    {
        message="You've got Blackjack!";
        hasBlackJack = true;
    }
    else{
        message="You're out of the game!";
        isAlive=false;
    }
    console.log(message);
    console.log(hasBlackJack);
    console.log(isAlive);
    //messageEl.textContent = message;
    document.getElementById("message-el").textContent = message;
    document.getElementById("sum-el").textContent = "Sum: "+ sum;
    //document.getElementById("cards-el").textContent = "Cards: "+ firstCard + " "+ secondCard;
    document.getElementById("cards-el").textContent = "Cards: ";
    for(let i =0;i<cards.length;i++)
    {
        document.getElementById("cards-el").textContent += cards[i]+" ";
    }
    // sumEl.textContent = "Sum: "+ sum;
    //cardsEl.textContent = "Cards: "+ firstCard + " "+ secondCard;
}
function newCard(){
    //console.log("Drawing a new card from the deck!");
    //let card = 7;
    //challenge:
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive === true && hasBlackJack === false)
    {
    let card = getRandomCard();
    sum += card;
    //challenge:
    // Push the card to the cards array
    cards.push(card);
    renderGame();
}
}
