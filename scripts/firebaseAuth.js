var config = {
      apiKey: "AIzaSyD_hCDqvH1lDzf02DMo2rXvpg9XxdniQqU",
      authDomain: "roi-team-the-syntax-errors.firebaseapp.com",
    };



firebase.initializeApp(config);
var currentUser = null
function createAccount(email,password) {
      console.log("1")
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
      window.location.href = 'index.html';
      console.log("2")
      // ...
      })
      .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Email has already been used");
      // ..
      });
      console.log("3")
}

function currentacc(){
      firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/v8/firebase.User
              // ...
               currentUser = user;
               console.log(currentUser);
            } else {
              // User is signed out
              // ...
              console.log("user not signed in")
            }
        });
}
