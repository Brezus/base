const form = document.querySelector("#form");
const email = document.getElementById("email");
const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".error-text");
const fail = document.getElementsByClassName("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});
function checkInput() {
  errorIcon.classList.add("hidden");
  if (!email.value) {
    errorIcon.classList.remove("hidden");
    errorText.classList.remove("hidden");
    fail.classList.add(".fail");
  }
  if (!isEmail(email)) {
    errorIcon.classList.remove("hidden");
    errorText.classList.remove("hidden");
  }
  if (isEmail(email)) {
    errorIcon.classList.add("hidden");
    errorText.classList.add("hidden");
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
