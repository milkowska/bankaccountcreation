
// get details of customer and create new customer using the api
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
            var fname = document.getElementById('fname').value
            var lname = document.getElementById('lname').value
            var dob = document.getElementById('dob').value
            var address = document.getElementById('address').value
            var postcode = document.getElementById('postcode').value
            var phone = document.getElementById('phone').value

            var data = {
                "customerID": currentUser.uid,
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

            setTimeout(function(){
                window.location.href = 'upload-document.html';
            }, 1000);

            
        } else {
            alert('Please fill out all required fields to proceed.');
        }
    });
});

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
<<<<<<< HEAD
// Go to page after confirming customer details
=======

>>>>>>> d92a5a8a833a2f66aa76011f2346f3ae376d2b92
document.addEventListener('DOMContentLoaded', function () {

    const next_button = document.getElementById('next_button');

    next_button.addEventListener('click', () => {
        console.log(sessionStorage.getItem("type"));
        // var data = {
        //     "customerID": currentUser.uid,
        //     "accountType": sessionStorage.getItem("type")
        // }

        // var jsonString = JSON.stringify(data);
        // var request = new XMLHttpRequest();
        // request.open("POST", "http://127.0.0.1:5000/newAccount", true);
        // request.setRequestHeader('Content-Type', 'application/json');
        // request.send(jsonString);

        // setTimeout(function(){
        //     window.location.href = 'successful-creation.html';
        // }, 1000);
    });
});
document.addEventListener('DOMContentLoaded', function () {

<<<<<<< HEAD
// Go to the main page (view all opened accounts)
=======
    const change_details = document.getElementById('change_details');

    change_details.addEventListener('click', () => {
        window.location.href = 'user-details.html'
    });

});
>>>>>>> d92a5a8a833a2f66aa76011f2346f3ae376d2b92
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

function loadCustomerDetails(){
    currentacc();
    setTimeout(function(){
        var url = "http://127.0.0.1:5000/getCustomerDetails/" + currentUser.uid;
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonResponse) {
            console.log(jsonResponse)
            var details = document.getElementById("details")
            details.innerHTML += "First name: " + jsonResponse.fname + "<br>";
            details.innerHTML += "Last name: " + jsonResponse.lname + "<br>";
            details.innerHTML += "Date of birth: " + jsonResponse.dob + "<br>";
            details.innerHTML += "Phone: " + jsonResponse.phone + "<br>";
            details.innerHTML += "Postcode: " + jsonResponse.postcode + "<br>";
            details.innerHTML += "Address: " + jsonResponse.address + "<br>";
        });
    }, 2000);
    
}
function getAccountType(x){
    console.log("pressed");
    if (x == 1){
        sessionStorage.setItem("type", "Basic");
    } else if (x == 2){
        sessionStorage.setItem("type", "Savings");
    } else if (x ==3){
        sessionStorage.setItem("type", "Business");
    }

    window.location.href = "user-details.html"
    
}
function loadAccounts(){
    var url = "http://127.0.0.1:5000/getOpenedAccounts/" + currentUser.uid;
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        var mainDiv = document.getElementById('openedAccounts');
        for (let i = 0; i < data.length; i++){
            var acc = document.createElement('div');
            acc.className = 'acc';

            var detail1 = document.createElement('div');
            var detail2 = document.createElement('div');

            detail1.style.display = "inline";
            detail1.style.float = "left"
            detail2.style.display = "inline";
            detail2.style.float = "right"

            var lastfour = data[i].cardNumber.substr(data[i].cardNumber.length - 5);
            detail1.innerHTML = data[i].accountType;
            detail2.innerHTML += "Account ending in: "+ lastfour;

            acc.appendChild(detail1)
            acc.appendChild(detail2)
            mainDiv.appendChild(acc);
        }
    });
    
}
function currentAccAndLoad(){
    currentacc();
    setTimeout(function(){
        loadAccounts();
    }, 1800);
}