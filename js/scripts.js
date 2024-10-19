document.querySelector("#login-form").addEventListener("submit", function(e){
    e.preventDefault();
    login();
});

function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(user == "hieu" && pass == "123456") { 
        window.location.href="index.html"
        return false;
    } else {
        alert("wrong user/pass");
        return false;
        }
    }