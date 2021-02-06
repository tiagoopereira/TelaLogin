var btnSignIn = document.getElementById("signin");
var btnSigUp = document.getElementById("signup");
var body = document.querySelector("body");

btnSignIn.addEventListener("click", function() {
    body.className = "sign-in-js";
});

btnSigUp.addEventListener("click", function() {
    body.className = "sign-up-js";
});