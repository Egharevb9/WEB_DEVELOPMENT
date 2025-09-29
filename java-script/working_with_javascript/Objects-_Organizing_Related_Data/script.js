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


 // creating  objects
 let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "Boston"
 };
 let product = {
    name : "laptop",
    price : 999,
    inStock: true,
    category: "Electronics"
 };
 console.log("person object:", person);
 console.log("product object:", product);
 console.log(""); // Empty line

 // two ways to acces properties:

 // 1. Dot notation (most common)
 console.log("using dot notation:");
 console.log("firstName:", person.firstName);
 console.log("product name:", product.name);
 console.log("product price:", product.price);

 console.log("") // Empty line
