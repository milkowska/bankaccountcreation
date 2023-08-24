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
/**
 * Once the user is logged in, they can see what account types are created along with their sort codes.
 * can have 1 account or more
 * 
 * @param {*} accounts account type eg flexible saving, direct debit
 */
function displayAccountInfo(accounts) {
      var accountInfoDiv = document.getElementById('accountInfo');
      accountInfoDiv.innerHTML = '<h2>Your bank accounts</h2>';
  
      accounts.forEach(function (account) {
          var accountRow = document.createElement('div');
          accountRow.className = 'account-row';
  
          var accountType = document.createElement('div');
          accountType.className = 'account-type';
          accountType.textContent = account.type;
  
          var sortCode = document.createElement('div');
          sortCode.className = 'sort-code';
          sortCode.textContent = 'Sort Code: ' + account.sortCode;
  
          accountRow.appendChild(accountType);
          accountRow.appendChild(sortCode);
  
          accountInfoDiv.appendChild(accountRow);
      });
  }