function saveLead() {
    //console.log("Button clicked")
}
//challenge:
// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
// let myLeads=`["www.google.com"]`;
let myLeads=[];
let oldLeads = []
//challenge
// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string
//myLeads = JSON.parse(myLeads)
//myLeads.push("www.lead2.com")
//myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)
//myLeads = JSON.stringify(myLeads);
//console.log(typeof myLeads);
const inputEl = document.getElementById("input-el"); //i run it without error on browser not on node
const inputBtn = document.getElementById("input-btn")
const deleteBtn=document.getElementById("delete-btn");
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el");
const tabBtn=document.getElementById("tab-btn");
//localStorage.setItem("google","www.google.com");
console.log(localStorage.getItem("google"));
console.log(ulEl);
//challenge
// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage
//localStorage.setItem("age","22");
console.log(localStorage.getItem("age"));
//localStorage.clear();

//challenge
// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
const tabs = [
    {url: "https://www.linkedin.com/in/noura-darwazeh-548672255"}
]
tabBtn.addEventListener("click",function(){
    // console.log(tabs[0].url);
    // // Save the url instead of logging it out
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
    
})
deleteBtn.addEventListener("dblclick",function(){
    console.log("dbclicked");
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
inputBtn.addEventListener("click", function() {
    console.log("Button clicked ")
    myLeads.push(inputEl.value)
    inputEl.value="";
    console.log(myLeads);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
    console.log( localStorage.getItem("myLeads") );
})
function render(leads) {
let listItems = "";
for(let i=0;i<leads.length;i++)
{
    //console.log(myLeads[i]);
    //ulEl.innerHTML += "<li>"+ myLeads[i] + "</li>"
    //ulEl.innerHTML+="<li>"+myLeads[i]+"</li>"
     //or
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)

    //listItems+="<li><a target='_blank' href='" + myLeads[i] + "'>"+myLeads[i]+"</a></li>"
        listItems+=`
        <li>
            <a target='_blank' href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>
        `

    console.log(listItems);

}
ulEl.innerHTML = listItems;
}