const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const newObject = { Login: email.value, Password: password.value };
  console.log(newObject);
  event.currentTarget.reset();
}
