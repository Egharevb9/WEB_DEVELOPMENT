//  basic for loop structure:;
// for  (initialization; ConditionRule; increment){
//     code to repeat;
// };

// simple counting loop
console.log("Counting from 1 to 5 : ");
for (let i = 1; i <= 5; i++){
    console.log("count:", i);
}
console.log("");   //Empty line

//Counting backwards
console.log("countdown from 5 to 1:");
for (let i = 5; i >= 1; i--){
    console.log("countdown:", i);
}
console.log("Blast off!");

console.log("");   //Empty line

// using  loops with calculatons
console.log("Multiplication table for 3:");
for (let i = 1;  i <= 10; i++){
    let result = 3 * i;
    console.log(`3 x ${i} = ${result}`);
}
console.log("");   //Empty line

// loop with different step sizes
console.log("Even numbers from 2 to 10: ");
for (let i = 2; i <= 10; i += 2){
    console.log("Even numbers: ", i);
}

console.log("");   //Empty line


// loop through an array using index
let colors = ["red","green", "blue", "yellow"];
console.log("colors in the arrays: ");
for (let i = 0; i < colors.length; i++){
    console.log(`color ${i +1}: ${colors[1]}`)
}


// for.... of loop  - easier way to go through array items
let fruits = ["apple", "banana", "orange", "grape"];

console.log("Using for...of loop:");
for (let fruit of fruits) {
    console.log("I like", fruit);
}

console.log(""); // Empty line


// compare with traditional loop
console.log("using tradional for loop: ")
for (let i = 0; i < fruits.length; i++) {
    console.log("ik like", fruits[i]);
}
console.log("");   // Empty line


let scores = [85, 92, 78, 96, 88];
let total  = 0;


console.log("calculating average score :");
for(let score of scores){
    console.log("Adding score : ",  score);
    total += score; // same as : total = total + score
}

let  average = total/ scores.length;
console.log(`Total: ${total}, Average: ${average.toFixed(1)}`);

console.log(""); //Empty line

// using loops with conditions
let temperaturs = [68, 72, 85, 90 , 75, 82, 88];
let hotDays = 0;
let coldDays = 0;

console.log("Analyzing temperaturs: ");
for (let temp of temperaturs){
    if (temp >= 85) {
        hotDays++;
        console.log(`${temp} °F - Hot day!`);
    }else if (temp < 70){
        coldDays++;
        console.log(`${temp} °F - cold day!`);
    }else{
        console.log(`${temp} °F - nice day!`);
    }
}
console.log(`summary: ${hotDays} hot days, ${coldDays} cold days`);
console.log("")  // Empty line


// Building new arrays with loops
let  numbers = [1, 2, 3, 4, 5]
let doubled = [];

console.log("Doubling each number: ");
for (let num of numbers){
    let doubledValueb = num * 2;
    doubled.push(doubledValueb)
    doubled.push(90)
}
console.log("original: ", numbers);
console.log("Doubled: ", doubled);



// while loop - repeats as long as  condition is true 
// while (condition) {
// code to repeat
//}

console.log("Basic while loop - counting to 5: ");
let count = 1;
while (count <= 5){
    console.log("count is :", count);
    count++;   // IMPORTANT: must  change  the condition variable!
}
console.log(); // Empty line

//while loop processing array until condition met
let number = [2, 4, 6, 8, 10, 12]
let i = 0;
let foundOdd = false;

console.log("looking for first odd number: ");
while (i < number.length && ! foundOdd){
    console.log(`checking ${number[i]}....`);


    if (number[i] % 2 === 1){  //check if odd 
        console.log(`found odd number : ${number[i]}`);
        foundOdd = true;
    } else {
        console.log(`${numbers[i]} is even, continuing....`);
    }
    i++;
}


if (! foundOdd){
    console.log("No odd numbers found!");
}
console.log("") // Empty line
//  do .... while loop - runs at least once
do {
    console.log("number is:" + number);
    number++;
} while ( number  <= 3 );
console.log("loop finished!");




//Array methods that use functions
//Modern  array methods that make processing easier

let numberss =[1,  2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Original numbers: ", numberss);
console.log("") // Empty line


// forEach() - Do something with each element
console.log("using forEach to print each number: ");
numberss.forEach(function(numberss){
    console.log("number: ", numberss);
});

console.log("") // Empty line

// more concise with arrow function
console.log("forEach with arrow function: ")
numberss.forEach(numberss => console.log(`value: ${numberss}`));
console.log("") // Empty line
 
//map() Transform each element and create new array
console.log("using map to double each number:");
let doubledd =  numberss.map(function(numberss){
    return numberss * 2;
});
console.log("Doubled:", doubledd);

// Shorter arrow function version
let trippled = numberss.map(numberss => numberss * 3);
console.log("Trippled: ", trippled);

console.log("") // Empty line


// filter() - keep only elements that meet condition
console.log ("using filter to get even numbers: ");
let evenNumbers = numberss.filter(function(number){
    return number % 2 === 0;
});
console.log("Even numbers:", evenNumbers);


// Get odd numbers with arrow function 
let oddNumbers = numberss.filter(numberss => numberss > 5);
console.log("first number > 5: ", firstBigNumber);


