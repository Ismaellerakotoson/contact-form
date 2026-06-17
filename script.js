const firstName = document.getElementById("first-name");
const email = document.getElementById("email");
const lastName = document.getElementById("last-name");
const message = document.getElementById("message");
const errorMessage = document.querySelectorAll(".error-message");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    firstName.value.trim() === "" ||
    lastName.value.trim() === "" ||
    email.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    errorMessage.forEach((error) => {
      error.classList.add("visible");
    });
  }
});
