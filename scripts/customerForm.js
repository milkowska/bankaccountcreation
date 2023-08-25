
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