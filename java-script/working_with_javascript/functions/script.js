// // function greet(name) {
// //     return  `Hello ${name}`;
// // }
// // console.log(greet('esther'))

// function runFirstProgram() {
//         //this is a commmit - javascript ignores  this line
//         // let's display a message in our output area
// document.getElementById(`first-output`).innerHTML = 'Hello  world ! this message  was created by javascript';

//          //Also show it in the browser console (open Developer Tools to see)
// console.log("Hello from javascript console !");
// }
// function showAlert() {
//         // show a popup alert
// alert('this is a javascript  alert!');
// }
// function showBasicVariables() {
//             //creating variables with different declarations

//     let StudentName = "Alice";
//     const SchoolName = "Tech Academy";
//     let age =25;

//             // display the variables
//     let output = `
//             Student Name: ${StudentName}
//             school Name: ${SchoolName}
//             Age : ${age}

//              `;
//     document.getElementById('variables-output').innerHTML = output;
//         console.log('student:', StudentName, 'age:', age, 'school:', SchoolName);
//     }
//     function showBasicVariables(){
//        // Creating variables with different declarations 
//        let StudentName = "Alice";
//        const SchoolName = "Tech Academy";
//        let age = 25;

//        // Display the variables
//        let output = ` 
//        Student Name: ${StudentName}
//        school Name:  ${SchoolName}
//        Age: ${age}
//        `;
//        document.getElementById('variables-output').innerHTML=output;
//        console.log('student', StudentName, 'Age:', age, 'school:', SchoolName);
//     }
//     function showBasicVariablesTypes() {
//         //different data types
//         let UserName = "John Doe";         // String
//         let UserAge = 30;                  // Number
//         let isActive = true;               // Boolean
//         let salary = 50000.50;             // Number (with decimals)
//         let middleName = null;             // Null (intentionally empty)
//         let nickname;                      // Undefined (not assigned)


//         let output = `
//         userName : "${UserName}" (type: ${typeof UserName})
//         userAge : ${UserAge} (type: ${typeof UserAge})
//         isActive: ${isActive}(type:${typeof isActive})
//         salary: ${salary}(type:${typeof salary})
//         middlename: ${middleName}(type:${typeof middleName})
//         nickname: ${nickname}(type:${typeof nickname})
        
//         `;
//         document.getElementById('variables-output')
//     }
//     function demonstrateConstVsLet(){
//         let changeable = "i  can be changed";
//         const permanent = "i cannot  be changed";
//         // change the let variable
//         changeable ="i have been changed!";
//         // try to change const ( this would cause an error)
//         //permanent = " this would cause an error!"; //don't uncomment this!
//     }
    console.log("Hello, World!");
    console.log("Welcome to javaScript!");
    console.log(" My name is [your name]");
    console.log(" Today i'm learning to code! ");

console.log("this is a regular message")
console.warn("this is a warning message")
console.error("this is an error message")
console.info(" this is information message")


// function structure
function funtionName(parameters){
    // code to execute

    return result; // optional
}
// your first function

// function declaration - creating the function
function sayHello() {
    console.log("Hello from my first function");
}
// function call - using the function
sayHello();

// you can call it multiple times
sayHello();
sayHello();

console.log(""); // Empty line

// Another simple function

function showCurrentTime() {
    let now = new Data();
    console.log(`current time: ${now.tolocaleTimeString()}`);

}
// javascript_2b
const calculateTax = function(amount, rate){
    return amount * rate;
};
console.log("Tax on $100v at 8.5%:", `calculate `, calculateTax(100, 0.085));


// working with Array

// Creating Arrays
let fruits =["apple", "banana", "orange", "grape",]
let numbers = [10, 25, 30, 45, 50];
let booleans = [true, false, true , true];
let mixedArray = ["John", 25, true, "student"];

// Empty array
let emptyArray  = [];

// Display the arrays
console.log("Fruits array:", fruits);
console.log("Numbers array:", numbers);
console.log("Mixed array:", mixedArray);
console.log("Empty array:", emptyArray);


console.log("");      //Empty line 


// Array length property
console.log("Number of fruits:", fruits.length);
console.log("Number of numbers:", numbers.length);
console.log("Empty array length:", emptyArray.length);


console.log("");   // Empty line

// Accessing individual elements with index [0, 1, 2, .....]
console.log("First fruit:", fruits[0]);   //Apple
console.log("Second fruit:", fruits[1]);   // banana
console.log("Last fruit:", fruits[fruits.length - 1]);   //grape

console.log("first number :", numbers[0]);  // 10
console.log("Third number :", numbers[2]);  // 30

// what happen with invalid indexes?
console.log("index that doesn't exits:", fruits[10]);   //undefined 

// modifying Arrays

let colors = ["red", "green", "blue"];
console.log("original colors:", colors);

// changing existing elements
colors[0] = "purple";
colors[2] = "yellow";
console.log("After changes:", colors);


console.log("");   // Empty line


// addibg elements to the end  with push()
let shoppinglist = ["milk", "bread"];
console.log("original list:", shoppinglist);


shoppinglist.push("egg")
shoppinglist.push("cheese", "butter"); // can add multiple items
console.log("After adding items: ", shoppinglist);


console.log("");   // Empty line


//  Removing the last element with pop()
let removedItem = shoppinglist.pop();  // pop() return  the removed item
console.log("Remove item: ", removedItem);
console.log("list after removing:", shoppinglist);


console.log("");   // Empty line


// Removing the first element with unshift()
let firstItem = shoppinglist.shift();
console.log("Removed first item:",  firstItem);
console.log("final list:", shoppinglist);

console.log("");   // Empty line


//  finding elements
let student = ["Alice", "Bob", "Charlie", "Diana"];
console.log("students:", student);
console.log("Is Bob in  class?", student.includes("Bob"));
console.log("Where is charlie?", student.indexOf("charlie"));
console.log("Where is frank?", student.indexOf("frank"));  // -1 means not found



// More Array Method
let number  = [ 1, 2, 3, 4, 5];
let names = ["John", "Jane", "Bob", "Alice"];



console.log("original numbers: ", number);
console.log("original names: ", names);

console.log("");   // Empty line

//  slice() - Get a portion of the array (doesn't change original)
let firstThree = number.slice(0,3);    // Get items 0, 1, 2
let LastTwo = number.slice(- 2);    // Get last  2 items


console.log("First three numbers: ", firstThree);
console.log("Last two numbers: ", LastTwo);
console.log("Original unchanged: ", number);

console.log("");   // Empty line


// splice() -  Remove/add items at specific position (changes original)
let  fruit = ["apple", "banana", "Orange","grape", "kiwi"]
console.log("Original fruits:", fruit);


// remove 2 items starting at index 1
let remove = fruit.splice(1, 2);
console.log("Removed items:", remove);
console.log("After Removal :", fruit);

// Add items at index 1
fruit.splice(1, 0, "Mango", "Pineaple"); // Remove 0, add 2 items
console.log("after adding:", fruit);

console.log("");   // Empty line

// join() - convert array to string 
let words = ["Hello", "from", "Javascript"];
let sentence = words.join(" ");   // Join with space
let csv = words.join(",");        // join with commas
console.log("words array:", words);
console.log("As sentence:", sentence);
console.log("As csv:", csv)

console.log("");   // Empty line

//  split() - convert string to array (string method , but creates arrays)
let  message = "apple, banana, orange";
let fruitArray = message.split(",");
console.log("String:", message);
console.log("Split into array:", fruitArray);



// reverse() - Reverse array order (changes original)
let countdown = [1,  2,  3,  4, 5 ];
console.log("Original countdown: ", countdown);
countdown.reverse();
console.log("Reversed countdown: ", countdown);



let fruitss = ["apple", "banana", "orange", "grape"];

console.log("Using for...of loop:");
for (let fruit of fruitss) {
    console.log("I like", fruitss);
}

console.log(""); // Empty line

// Compare with traditional for loop
console.log("Using traditional for loop:");
for (let i = 0; i < fruitss.length; i++) {
    console.log("I like", fruitss[i]);
}
