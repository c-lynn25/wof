var email = "chanmunien@gmail.com", password = "PASSWORD";

function validate() {
    var emailcheck = document.getElementById("email").value;
    var passwordcheck = document.getElementById("password").value;
    if (passwordcheck == password && emailcheck == email) {
        //welcome user by username, access db for this
        alert("Welcome user.");
    }
    else {
        alert("Please recheck your email and password combination!")
    }
} 

function resetPassword() {
    var toReset = document.getElementById("resetThis").value;
    alert("A link has been sent to " + toReset+" to reset your password.");
}


function validateSignUp() {
    var user = document.getElementById("user").value;
    var useremail = document.getElementById("signUpEmail").value;
    var userPassword = document.getElementById("signUpPassword").value;
    var userConfirm = document.getElementById("signUpPasswordConfirm").value;

    if (userPassword != userConfirm) {
        alert("Your passwords do not match!");
    }
}
function test() {
    window.location.replace("gamePage.html");
}
