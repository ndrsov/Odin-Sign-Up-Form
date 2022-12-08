const password = document.getElementById("password");
const passwordRepeat = document.getElementById("password-confirmed");

passwordRepeat.addEventListener("input", confirmPassword);

function confirmPassword() {
  if (passwordRepeat.value !== password.value) {
    password.classList.add("error");
    passwordRepeat.classList.add("error");
  } else {
    password.classList.remove("error");
    passwordRepeat.classList.remove("error");
  }
}
