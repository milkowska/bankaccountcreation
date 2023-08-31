/*
document.addEventListener('DOMContentLoaded', function () {
    const submit_button = document.getElementById('submit_button');

    submit_button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const requiredFields = document.querySelectorAll('input[required]');
        let allFieldsFilled = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                allFieldsFilled = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });

        if (allFieldsFilled) {
            const userData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                phoneNumber: document.getElementById('phoneNumber').value,
                address: document.getElementById('address').value,
                DOB: document.getElementById('DOB').value,
                postcode: document.getElementById('postcode').value,
            };

            localStorage.setItem('userData', JSON.stringify(userData));

            window.location.href = 'upload-document.html';
        } else {
            alert('Please fill out all required fields to proceed.');
        }
    });
});
*/

function createCustomer() {
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var dob = document.getElementById('dob').value
    var address = document.getElementById('address').value
    var postcode = document.getElementById('postcode').value
    var phone = document.getElementById('phone').value

    var data = {
        "fname": fname,
        "lname": lname,
        "dob": dob.toString(),
        "address": address,
        "postcode": postcode,
        "phone": phone
    }
    var jsonString = JSON.stringify(data);
    var request = new XMLHttpRequest();
    request.open("POST", "http://127.0.0.1:5000/newCustomer", true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(jsonString);

    console.log(data)
}
/*
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData')) || {};

    const displayFirstName = document.getElementById('displayFirstName');
    const displayLastName = document.getElementById('displayLastName');
    const displayPhoneNumber = document.getElementById('displayPhoneNumber');
    const displayAddress = document.getElementById('displayAddress');
    const displayDOB = document.getElementById('displayDOB');
    const displayPostcode = document.getElementById('displayPostcode');

    displayFirstName.textContent = storedUserData.firstName || 'N/A';
    displayLastName.textContent = storedUserData.lastName || 'N/A';
    displayPhoneNumber.textContent = storedUserData.phoneNumber || 'N/A';
    displayAddress.textContent = storedUserData.address || 'N/A';
    displayDOB.textContent = storedUserData.DOB || 'N/A';
    displayPostcode.textContent = storedUserData.postcode || 'N/A';
})
*/

document.addEventListener('DOMContentLoaded', function () {

    const submit_button = document.getElementById('submit_button');

    submit_button.addEventListener('click', () => {
        window.location.href = 'successful-creation.html';
    });

});

document.addEventListener('DOMContentLoaded', function () {

    const next_button = document.getElementById('next_button');

    next_button.addEventListener('click', () => {
        window.location.href = 'successful-creation.html';
    });

});
document.addEventListener('DOMContentLoaded', function () {

    const change_details = document.getElementById('change_details');

    change_details.addEventListener('click', () => {
        window.location.href = 'user-details.html'
    });

});
document.addEventListener('DOMContentLoaded', function () {
    const go_main = document.getElementById("goMain");

    go_main.addEventListener('click', () => {
        window.location.href = 'main-page.html';
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const goLogin = document.getElementById("logoutButton")

    goLogin.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
});

