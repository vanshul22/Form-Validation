/*
Website Name - Form Validation
Name : Vanshul Kesharwani
Date : 01/04/2022
Version : 3.2.1
Email : vkvanshulkesharwani54@gmail.com
Description : This is a Web app for validating a form with Regular Expression of JavaScript.
*/

// taking default values for form correction.
let userNameValid = false;
let emailValid = false;
let phoneValid = false;

// Taken all required variables from their ID.
let userName = document.getElementById("userName");
let phone = document.getElementById("phone");
let email = document.getElementById("email");

// Add event listener to the particular variables.
userName.addEventListener("blur", blurUserName);
phone.addEventListener("blur", blurPhone);
email.addEventListener("blur", blurEmail);

// Added function to validate from Reg Ex, from blur event.
function blurUserName() {
    let re = /^[a-zA-Z]([0-9a-zA-Z ]){2,14}$/;
    let str = userName.value;
    if (re.test(str)) {
        console.log("your name is valid");
        userName.classList.remove('is-invalid');
        userNameValid = true;
    } else {
        console.log("Your name is invalid");
        userName.classList.add('is-invalid');
        userNameValid = false;
    };
};


// Added function to validate from Reg Ex, from blur event.
function blurPhone() {
    let re = /^([0-9]){10}$/;
    let str = phone.value;
    if (re.test(str)) {
        console.log("your phone is valid");
        phone.classList.remove('is-invalid');
        phoneValid = true;
    } else {
        console.log("Your phone is invalid");
        phone.classList.add('is-invalid');
        phoneValid = false;
    };
};


// Added function to validate from Reg Ex, from blur event.
function blurEmail() {
    let re = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (re.test(str)) {
        console.log("your email is valid");
        email.classList.remove('is-invalid');
        emailValid = true;
    } else {
        console.log("Your email is invalid");
        email.classList.add('is-invalid');
        emailValid = false;
    };
};


// validating all form data from submit ID.
let submit = document.getElementById("submit");
submit.addEventListener("click", submitData);

// Adding Submit function
function submitData(e) {
    e.preventDefault();
    console.log(userNameValid, emailValid, phoneValid);
    if (userNameValid, emailValid, phoneValid) {
        console.log("values are correct");
    } else {
        console.log("values are not correct");
    };
};