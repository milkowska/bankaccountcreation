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
            
            window.location.href = 'final_check.html';
        } else {
            alert('Please fill out all required fields to proceed.');
        }
    });
});

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

document.addEventListener('DOMContentLoaded', function () {

    const previous_page = document.getElementById('previous_page');

    previous_page.addEventListener('click', () => {
        window.history.back(); 
    });

});

document.addEventListener('DOMContentLoaded', function () {

    const next_button = document.getElementById('next_button');

    next_button.addEventListener('click', () => {
        window.location.href = 'successful_creation.html';
    });

});