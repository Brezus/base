let form = document.querySelector("#form");
let emailField = document.getElementById("email");
let errorIcon = document.querySelector(".error-icon");
let errorText = document.querySelector(".error-text");
let submitBtn = document.getElementById("sub-btn");

emailField.addEventListener("input", (e) => {
  checkInput();
  e.preventDefault();
});
function checkInput() {
  let value = emailField.value;
  let isValid = emailField.validity.valid;
  if (!value) {
    errorIcon.classList.remove("hidden");
    errorText.classList.remove("hidden");
  } else if (value && value.length > 5) {
    errorIcon.classList.add("hidden");
    errorText.classList.add("hidden");
    if (emailField.validity.valid) {
      return;
    } else {
      errorIcon.classList.remove("hidden");
      errorText.classList.remove("hidden");
    }
  }
}
