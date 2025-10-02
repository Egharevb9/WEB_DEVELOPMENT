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


//  Example 4: Multiple timers
setTimeout(() => console.log("1 Second"), 1000);
setTimeout(() => console.log("2 Second"), 2000);
setTimeout(() => console.log("3 Second"), 3000);


//  you can cancel a timeout before it runs 

let timerId = setTimeout(() => {
    console.log("this will  not run");
},5000);

//  cancel it 
clearTimeout(timerId);
console.log("Timer was cancelled");

//  practical example: auto-hide notification
let notificationTimer;

function showNotification(message){
    console.log("Notification:", message );
}
// Hide after 3 seconds
notificationTimer = setTimeout(() => {
    console.log("notification hidden");
},3000);

function hideNotificationNow(){
    clearTimeout(notificationTimer);
    console.log("Notification  hidden immediately");
}
// Test it 
showNotification("welcome !");

let counter = 0;
//this runs every 1 second

let intervalid = setInterval(function () {
    counter++;
    console.log("counter: ", counter);

    // stop after  5 times
    if (counter  >= 5){
        clearInterval(intervalid);
        console.log("stopped !");
    }
},1000);

let  clockInterval = null;

function updateClock() {
    //get current time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // add leading Zeros
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    // Display time
    let timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById('clockDisplay').textContent = timeString;
}
function startClock(){
    updateClock(); // show time immediately
    clockInterval = setInterval(updateClock, 1000); // update every second
}
function stopClock(){
    clockInterval(clockInterval);
}
// start automatically
startClock();