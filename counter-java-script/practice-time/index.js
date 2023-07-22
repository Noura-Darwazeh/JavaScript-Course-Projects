// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let x = document.getElementById("error");
function purchase()
{
    x.textContent="Something went wrong, please try again";
}