// ----- Select Items
// selects from form
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
// selects from list
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// -- edit option
let editElement;
let editFlag = false;
let editID = "";

// ----- Even Listeners
// submit form
form.addEventListener("submit", addItem);
// ----- Functions
function addItem(event) {
  event.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value !== "" && editFlag === false) {
    const element = document.createElement("article");
    // add class
    element.classList.add("");
  } else if (value !== "" && editFlag === true) {
    console.log("editing");
  } else {
    displayAlert("please enter a value", "danger");
  }
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// ----- Local Storage

// ----- Setup Items
