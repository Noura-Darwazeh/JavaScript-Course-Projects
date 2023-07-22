const welcomeEl = document.getElementById("welcome-el")
// function greetUser(name) {
//     welcomeEl.textContent = "Welcome back, " + name + " 👋"    
// }

// greetUser("Per")
//challenge:
// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting) {
    welcomeEl.textContent = greeting + ", Per Harald Borgen 👋"     
}

greetUser("hihi")
//with  parameter
function greetUser2(greeting,name,emoji) {
    welcomeEl.textContent = `${greeting},  ${name} ${emoji}`  ;   
}
greetUser2("hello","noura"," 👋");

//new challenge
// Create a function, add(), that adds two numbers together and returns the sum
function add(a,b)
{
    return a+b;
}
console.log(add(3,4));//7
console.log( add(9, 102)); //  111
//challenge parameters and arguments
// What are greeting and name? parameters
// What are "Howdy" and "James"? arguments
// What are num1 and num2? parameters
// What are 3 and 4? arguments

//challengr array as parameter
// Create a function, getFirst(arr), that returns the first item in the array
// Call it with an array as an argument to verify that it works

function getFirst(arr)
{
    return arr[0];
}
console.log(getFirst([1,2,3]));