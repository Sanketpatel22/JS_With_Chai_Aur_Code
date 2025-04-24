console.log("Hello, World!");
let userName;

alert("WELCOME TO THE PAGE!");
userName= prompt("please enter your name:");

confirm("Are you sure you want to continue?");
alert("Hello " + userName + ", welcome to the page!");

function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let password = document.forms["myForm"]["password"].value;
    let confirmPassword = document.forms["myForm"]["confirmPassword"].value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    if (confirmPassword == "") {
        alert("Confirm Password must be filled out");
        return false;
    }
}