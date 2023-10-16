import validate from "./validationClass.js";

let flagDisabledButton = false;
let inputs;
let userForm;
export default function startWork() {
  flagDisabledButton = false;
  inputs = document.querySelectorAll('input , select');
  userForm = document.querySelector("form");
  addValidateEventToInputs();
  addEventSubmitToForm(flagDisabledButton);
}


function addValidateEventToInputs() {
  // check all Inputs except radio and checkbox 
  let inputsFunction = Array.from(inputs);
  inputsFunction = inputsFunction.filter(input => input.type !== 'checkbox' && input.type !== 'radio');
  inputsFunction.forEach(input => {
    input.addEventListener('blur', e => {
      if (!input.name.includes("search")) {
        affectTheTargetInput(input);
      }
    });
  });

  // check radio Inputs
  let radioAndCheckInput = document.querySelectorAll('input[type="radio"]');
  radioAndCheckInput?.forEach(input => {
    if (input.checked) {
    };
  });
  // check checkbox Inputs
  let checkboxInput = document.querySelectorAll('input[type="checkbox"]');
  if (checkboxInput && checkboxInput != undefined && checkboxInput.length > 0) {

  };
}

function affectTheTargetInput(input) {
  if (validate(input)) {
    input.classList.add('Valid');
    input.parentElement.children[1]?.classList.add('d-none');
    input.classList.remove('inValid');
  } else {
    input.classList.add('inValid');
    input.parentElement.children[1]?.classList.remove('d-none');
    input.classList.remove('Valid');
  }
}

function takeAroundtoCheckValidationForInputs() {
  flagDisabledButton = true;
  let inputsFun = Array.from(inputs).filter(input => input.type !== 'checkbox' && input.type !== 'radio' && input.type !== 'file');
  inputsFun.forEach(input => {
    if (!input.name.includes("search")) {
      affectTheTargetInput(input);
      if (!validate(input)) {
        flagDisabledButton = false;
      }
    }
    else flagDisabledButton = true;
  });
}
function createUserFromForm() {
  let user = {};
  // create user from form except radio and checkbox and file
  let inputsExceptRadiosAndCheckboxAndFile = Array.from(inputs).filter(input => input.type !== 'checkbox' && input.type !== 'radio' && input.type !== 'file');
  inputsExceptRadiosAndCheckboxAndFile.forEach(input => {
    user[input.name] = input.value;
  });

  // create user from form radio and checkbox Inputs
  let radioAndCheckInput = document.querySelectorAll('input[type="radio"]');
  radioAndCheckInput?.forEach(input => {
    if (input.checked) {
      user[input.name] = input.value;
    };
  });
  // create user from form  file Inputs
  let fileInput = document.querySelector('input[type="file"]');
  if (fileInput) {
    user.profileUrl = fileInput.files[0];
  }

  // create user from form except radio and checkbox and file
  let checkboxInput = document.querySelectorAll('input[type="checkbox"]');
  if (checkboxInput && checkboxInput != undefined && checkboxInput.length > 0) {
    user[checkboxInput[0].name] = [];
    checkboxInput.forEach(input => {
      if (input.checked) {
        user[checkboxInput[0].name].push(input.value);
      }
    });
  }
  return user;
}
function addEventSubmitToForm() {
  userForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    takeAroundtoCheckValidationForInputs();
    if (flagDisabledButton) {
      let user = createUserFromForm()
      submitForm(user, this);
    }
    else {
      takeAroundtoCheckValidationForInputs();
    }
  });
}

function submitForm(user, form) {
  let SubmitButton = form.querySelector(" button");
  SubmitButton.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
  SubmitButton.disabled = true;
  switch (form.id) {
    case "RentPageSearch":
      console.log("RentPageSearch");
      SubmitButton.innerHTML = `بحث`;
      SubmitButton.disabled = false;
      break;
  

  }
}