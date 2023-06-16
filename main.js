const dayBorn = document.querySelector("#day");
const monthBorn = document.querySelector("#month");
const yearBorn = document.querySelector("#year");

const button = document.querySelector(".button");
const form = document.querySelector("form");

const resultDays = document.querySelector("#days");
const resultMonths = document.querySelector("#months");
const resultYears = document.querySelector("#years");

form.addEventListener("submit", handleSubmit);

const currentDate = new Date();
let day = currentDate.getDate();
let month = 1 + currentDate.getMonth();
let year = currentDate.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const allInputs = document.querySelectorAll("input");
  let validator = true;
  allInputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "This field is required";
      validator = false;
    } else if (monthBorn.value > 12) {
      monthBorn.style.borderColor = "red";
      monthBorn.parentElement.querySelector("small").innerText =
        "Must be a valid required";
      validator = false;
    } else if (dayBorn.value > 31) {
      dayBorn.style.borderColor = "red";
      dayBorn.parentElement.querySelector("small").innerText =
        "Must be a valid required";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayBorn.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthBorn.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayBorn.value;
    const m = month - monthBorn.value;
    const y = year - yearBorn.value;
    resultDays.innerHTML = d;
    resultMonths.innerHTML = m;
    resultYears.innerHTML = y;
  }
}

button.addEventListener("click", validate);
