const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');

emailInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  if (!submitButton.hasAttribute('disabled')) {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      createAccount(email,password);
  }
});

function checkInputs() {
  if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'true');
  }
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}