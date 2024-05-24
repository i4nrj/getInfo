import { getInfo } from "./getInfo";

console.log(sum(1, 2));
// Inputs:
const firstNameInput = document.getElementById("inp-firstName");
const lastNameInput = document.getElementById("inp-lastName");
const fathersNameInput = document.getElementById("inp-fathersName");
const dateInput = document.getElementById("inp-date");

// Submit button:
const submitButton = document.getElementById("submit-btn");

// Constants:
let firstName = "";
let lastName = "";
let fathersName = "";
let date = "";

// Function:
firstNameInput.addEventListener("change", () => {
  firstName = firstNameInput.value;
});
lastNameInput.addEventListener("change", () => {
  lastName = lastNameInput.value;
});
fathersNameInput.addEventListener("change", () => {
  fathersName = fathersNameInput.value;
});
dateInput.addEventListener("change", () => {
  date = dateInput.value;
});

submitButton.addEventListener("click", () =>
  getInfo(firstName, lastName, fathersName, date)
);
