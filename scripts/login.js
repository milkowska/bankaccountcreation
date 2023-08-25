const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');

emailInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  if (!submitButton.hasAttribute('disabled')) {

      window.location.href = 'index.html';
  }
});

function checkInputs() {
  if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'true');
  }
}
