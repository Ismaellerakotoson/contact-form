const firstName = document.getElementById("first-name");
const email = document.getElementById("email");
const lastName = document.getElementById("last-name");
const message = document.getElementById("message");
const queryRadios = document.querySelectorAll('input[name="query"]');
const consent = document.querySelector('input[name="consent"]');
const notification = document.querySelector(".top-notification");

const form = document.querySelector("form");

const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const radioError = document.getElementById("query-error");
const messageError = document.getElementById("message-error");
const consentError = document.getElementById("consent-error");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  const isFirstNameInvalid = firstName.value.trim() === "";
  manageError(firstNameError, isFirstNameInvalid);
  if (isFirstNameInvalid) isValid = false;

  const isLastNameInvalid = lastName.value.trim() === "";
  manageError(lastNameError, isLastNameInvalid);
  if (isLastNameInvalid) isValid = false;

  const emailValue = email.value.trim();
  const isEmailEmpty = emailValue === "";
  const isEmailInvalidFormat = !emailRegex.test(emailValue);

  if (isEmailEmpty) {
    emailError.textContent = "This field is required";
    manageError(emailError, true);
    isValid = false;
  } else if (isEmailInvalidFormat) {
    emailError.textContent = "Please enter a valid email address";
    manageError(emailError, true);
    isValid = false;
  } else {
    emailError.textContent = "";
    manageError(emailError, false);
  }

  const isMessageInvalid = message.value.trim() === "";
  manageError(messageError, isMessageInvalid);
  if (isMessageInvalid) isValid = false;

  const isQueryChecked = [...queryRadios].some((radio) => radio.checked);
  const isQueryInvalid = !isQueryChecked;
  manageError(radioError, isQueryInvalid);
  if (isQueryInvalid) isValid = false;

  const isConsentChecked = consent.checked;
  const isConsentInvalid = !isConsentChecked;
  manageError(consentError, isConsentInvalid);
  if (isConsentInvalid) isValid = false;

  if (isValid) {
    handleSubmit();

    notification.classList.add("visible");

    setTimeout(() => {
      notification.classList.remove("visible");
    }, 5000);

    reset();
  }
});

function handleSubmit() {
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const messageValue = message.value;
  const queryRadiosValue = [...queryRadios].find(
    (radio) => radio.checked,
  )?.value;
  const consentValue = consent.checked;

  console.log("First name :", firstNameValue);
  console.log("Last name :", lastNameValue);
  console.log("email :", emailValue);
  console.log("Message :", messageValue);
  console.log("Query choice :", queryRadiosValue);
  console.log("Consent :", consentValue);
}

function reset() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  message.value = "";

  queryRadios.forEach((radio) => (radio.checked = false));
  consent.checked = false;
}

function manageError(elements, state) {
  elements.classList.toggle("visible", state);
  elements.classList.toggle("hidden", !state);
}