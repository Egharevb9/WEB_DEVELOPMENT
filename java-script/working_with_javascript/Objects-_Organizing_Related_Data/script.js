// instead of separate variables for student data:
let name = "Alice";
let age = 20;
let grade = 85;
console.log("separate variables for student data:")
console.log("name:", name);
console.log("age", age);
console.log("Grade", grade);

console.log(""); // Empty line


// objects group related data together:
let student = {
    name : "Alice",
    age : 20,
    grade: 85
};


console.log("objec: ");
console.log("Student object:", student);
console.log("Student name:", student.name);
console.log("Student age:", student.age);
console.log("Student grade :", student.grade);

 console.log("") // Empty line


 // object are much cleaner for related data
 let car = {
    make: "Toyota " ,
    model: "camry",
    year: 2020,
    color : "blue",
 };
 console.log("car info:");
 console.log(`car: ${car.year} ${car.make} ${car.model} (${car.color})`);