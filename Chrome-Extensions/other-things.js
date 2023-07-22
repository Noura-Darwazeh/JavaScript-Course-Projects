//let and const
const playerName = "Per"
let credits = 45

credits = credits - 10
/////////
//challenge:
// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
let basePrice = 520 //should be const
let discount = 120 //should be const
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
let fullPrice = basePrice - discount + shippingCost //should be const

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

//challenge
// template strings/literals

const recipient = "James"

// Refactor the email string to use template strings
//const email = "Hey " + recipient + "! How is it going? Cheers Per"

// console.log(email)
// Create a new variable, sender, and set its value to your name

// Use your sender variable instead of "Per"
//my solution:
let sender = "noura";
const email = `Hey  ${ recipient} !
 How is it going?
  Cheers ${ sender}
  `
console.log(email)
