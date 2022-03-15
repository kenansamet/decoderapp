const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["fname"];
const ageInput = studentForm["lname"];
const rollInput = studentForm["date"];
const dosisInput = studentForm["dosis"];
const dateInput = studentForm["idate"];
const markeInput = studentForm["marke"];
const landInput = studentForm["land"];
/* 
{
  name: '',
  age: number,
  roll: number
}
*/

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (fname, lname, date, dosis, idate, marke, land) => {
  students.push({
    fname,
    lname,
    date,
    dosis,
    idate,
    marke,
    land,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { fname, lname, date, dosis, idate, marke, land };
};

const createStudentElement = ({
  fname,
  lname,
  date,
  dosis,
  idate,
  marke,
  land,
}) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentRoll = document.createElement("p");
  const studentDosis = document.createElement("p");
  const studentDate = document.createElement("p");
  const studentMarke = document.createElement("div");
  const studentLand = document.createElement("div");

  // Fill the content
  studentName.innerText = "Name: " + fname;
  studentMarke.innerText = "Hersteller: " + marke;
  studentAge.innerText = "Nachname: " + lname;
  studentRoll.innerText = "Datum: " + date;
  studentDosis.innerText = "Dosis: " + dosis;
  studentDate.innerText = "Impfdatum: " + idate;
  studentLand.innerText = "Code: " + land;

  // Add to the DOM
  studentDiv.append(
    studentName,
    studentAge,
    studentRoll,
    studentDosis,
    studentDate,
    studentMarke,
    studentLand
  );
  studentsContainer.appendChild(studentDiv);

  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = (e) => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value,
    dosisInput.value,
    dateInput.value,
    markeInput.value,
    landInput.value
  );

  createStudentElement(newStudent);

  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
  dosisInput.value = "";
  dateInput.value = "";
  markeInput.value = "";
  landInput.value = "";
};


