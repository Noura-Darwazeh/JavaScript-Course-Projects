let myAge = 22 ;
let humanDogRatio = 7 ;

let myDogAge= myAge*humanDogRatio;
console.log(myDogAge);
////////
let bonusPoints = 50;
console.log(bonusPoints);

bonusPoints=bonusPoints+50;
console.log(bonusPoints);

bonusPoints=bonusPoints-75;
console.log(bonusPoints);

bonusPoints=bonusPoints+45;
console.log(bonusPoints);
///////////////

//without function
    console.log("5");
    console.log("4");
    console.log("3");
    console.log("2");
    console.log("1");
    console.log("5");
    console.log("4");
    console.log("3");
    console.log("2");
    console.log("1");
//using function
function countdown()
{
    console.log("5");
    console.log("4");
    console.log("3");
    console.log("2");
    console.log("1");
}
countdown();
countdown();
//challenge write function
function printNumber()
{
    let x = 42;
    console.log(x);
}
printNumber();
//function that logs out the sum of all laps time
let lap1=33;
let lap2=34;
let lap3=36;
function sumLaps(){
    let total =lap1+lap2+lap3;
    console.log(total);
}
sumLaps();
// create function that incremente the lapCompleted variable with one and run it 3 time
let lapCompleted = 0;
function incrementeLapCompleted(){
    lapCompleted++;

}
incrementeLapCompleted();
incrementeLapCompleted();
incrementeLapCompleted();
console.log(lapCompleted);
//increment
 //let countEl = document.getElementById("count-el");
// console.log(countEl);
let c =0;
function increment(){
   console.log("clicked");
   c = c+1 // chalange: Change this to use the plus equal technique you've learned
   //or c +=1;
   document.getElementById("count-el").innerHTML = c;
   //countEl.innerText=c;
   console.log(c);

}

//save button:
function save(){
    console.log(c);
}
save();
// String:
let username = "per"; // or let username = 'per';
console.log(username);
//challange string:
let message = "You have tree new notifications ";
console.log(message+ ","+username+"!");

let messageToUser = message + "," + username + "!";
console.log(messageToUser);
//challange string
let name = "Noura";
let greeting = "Hi, my name is ";
let myGreeting = greeting + name;
console.log(myGreeting);
// string and number
let namex = 22;
let greetingx = "Hi, my name is ";
let myGreetingx = greetingx + namex;
console.log(myGreetingx);

let points=4;
let bonusPointsx="10";
totalPoints= points + bonusPointsx;
console.log(totalPoints);

console.log(4 + 5) ;
console.log("2" + "4");
console.log("5" + 1);
console.log(100 + "100");

