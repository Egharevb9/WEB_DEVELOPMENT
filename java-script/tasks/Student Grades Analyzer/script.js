const grades = [80, 85, 90, 95 , 100];


function getAverage(grades){
const numbers = [80, 85, 90, 95, 100];
const sum = numbers.reduce((total, number) => total + number, 0);
const average = sum / numbers.length;
console.log(average); 
}


const grade = [80, 85, 90, 95 , 100];

// const numbers = [10, 25, 8, 42, 17];
const highest = Math.max(...grade);
console.log(highest); // Output: 42

// let highest = grade[4];

// function getHighest(grades){
//     for (let i = 1; i < grade.length; i++) {
//         if (grade[i] > highest) {
//             highest = grade[i];
//   }
// }

// }
// console.log(highest); 


const gradess = [80, 85, 90, 95 , 100];
let lowestGrade = Math.min(...gradess) ;
// function getLowest(gradess){
//      for (let i = 1; i < gradess.length; i++) {
//         if (gradess[i] > highest) {
//             lowest = gradess[i];
//   }
// }
// }
console.log(lowestGrade); 

const scores = [40, 45, 50, 55, 80, 85, 90, 95 , 100];
function getPassRate(){
console.log(scores)
let count = 0;
for (let score = 0; score < scores.length; score++){
    if (scores[score] >= 50){
        count++
    }
}
percentage_of_passed_student = (count / scores.length)*100;
console.log(`percentage of students who passed ${percentage_of_passed_student}`)
}
