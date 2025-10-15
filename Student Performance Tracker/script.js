const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");
let students = JSON.parse(localStorage.getItem("students")) || [];

studentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const student = {
    firstName: studentForm.firstName.value,
    middleName: studentForm.middleName.value,
    lastName: studentForm.lastName.value,
    age: studentForm.age.value,
    class: studentForm.class.value,
    img: studentForm.img.value,
    css: Number(studentForm.css.value),
    html: Number(studentForm.html.value),
    js: Number(studentForm.js.value),
  };

  student.average = ((student.css + student.html + student.js) / 3).toFixed(2);

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();
  studentForm.reset();
});

function displayStudents() {
  studentTable.innerHTML = "";
  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.firstName}</td>
      <td>${student.middleName}</td>
      <td>${student.lastName}</td>
      <td>${student.age}</td>
      <td>${student.class}</td>
      <td>${student.css}</td>
      <td>${student.html}</td>
      <td>${student.js}</td>
      <td>${student.average}</td>
      <td><img src="${student.img}" alt="Student Image" width="50"/></td>
    `;
    studentTable.appendChild(row);
  });
}

// Initial load
displayStudents();