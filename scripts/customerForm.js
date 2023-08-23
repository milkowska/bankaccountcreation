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
}