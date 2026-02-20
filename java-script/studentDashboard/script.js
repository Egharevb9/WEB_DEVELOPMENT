const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const students = JSON.parse(localStorage.getItem("students"));
const grades = JSON.parse(localStorage.getItem("grades"));
const courses = JSON.parse(localStorage.getItem("courses"));

const student = students.find(s => s.email === currentUser.email);
const studentGrades = grades.filter(g => g.studentId === student.id);

const table = document.getElementById("grades-table");
const courseCount = document.getElementById("course-count");
const averageGrade = document.getElementById("average-grade");

let total = 0;

studentGrades.forEach(g => {
  const course = courses.find(c => c.id === g.courseId);
  total += g.grade;

  const gradeClass = g.grade >= 80 ? "grade-A" : g.grade >= 70 ? "grade-B" : "grade-C";

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${course.courseName}</td>
    <td class="${gradeClass}">${g.grade}</td>
    <td><a href="#">View Details</a></td>
  `;
  table.appendChild(row);
});

courseCount.textContent = student.enrolledCourses.length;
averageGrade.textContent = Math.round(total / studentGrades.length);