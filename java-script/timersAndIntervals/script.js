//Example 1 : simple delay
setTimeout(function() {
    console.log("Hello after 1 second");

}, 1000);

//  Example 2: with arrow function (shorter way)
setTimeout(() => {
    console.log("hello after 3 seconds");
},3000);

//  Example 3: using a named  function
function showMessage() {
    console.log("This is a delayed message ");
}
setTimeout(showMessage, 2000);


//  Example 3: using a named  function