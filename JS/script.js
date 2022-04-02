/*
Website Name - Form Validation
Name : Vanshul Kesharwani
Date : 01/04/2022
Version : 4.1.1
Email : vkvanshulkesharwani54@gmail.com
Description : This is a Web app for validating a form with Regular Expression of JavaScript.
*/

// taking default values for form correction.
let userNameValid = false;
let emailValid = false;
let phoneValid = false;
let addressValid = false;
let messageValid = false;

// Taken all required variables from their ID.
let userName = document.getElementById("userName");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let address = document.getElementById("address");
let message = document.getElementById("message");

// Add event listener to the particular variables.
userName.addEventListener("blur", blurUserName);
phone.addEventListener("blur", blurPhone);
email.addEventListener("blur", blurEmail);
address.addEventListener("blur", blurAddress);
message.addEventListener("blur", blurMessage);

// Added function to validate from Reg Ex, from blur event.
function blurUserName() {
    // Here we are taking starting char of [a-zA-Z] it means start from a to z and A to Z space are allowed and 3 to 15 chars allow.
    let re = /^[a-zA-Z]([0-9a-zA-Z ]){2,14}$/;
    let str = userName.value;
    if (re.test(str)) {
        userName.classList.remove('is-invalid');
        userNameValid = true;
    } else {
        userName.classList.add('is-invalid');
        userNameValid = false;
    };
};


// Added function to validate from Reg Ex, from blur event.
function blurPhone() {
    // Here we are taking starting char of [^([0-9]){10}$] it means only 10 numbers allowed.
    let re = /^([0-9]){10}$/;
    let str = phone.value;
    if (re.test(str)) {
        phone.classList.remove('is-invalid');
        phoneValid = true;
    } else {
        phone.classList.add('is-invalid');
        phoneValid = false;
    };
};


// Added function to validate from Reg Ex, from blur event.
function blurEmail() {
    // Here we are taking starting char of [_\-\.0-9a-zA-Z] and after @ can come these [_\-\.0-9a-zA-Z] and after . anything between 3 to 8 chars. + means 1 or more occurrence.
    let re = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (re.test(str)) {
        email.classList.remove('is-invalid');
        emailValid = true;
    } else {
        email.classList.add('is-invalid');
        emailValid = false;
    };
};

// Added function to validate from Reg Ex, from blur event.
function blurAddress() {
    // Here we are taking starting char of [#a-zA-Z0-9] and after that anything comes from this [\/\-,( )._#a-zA-Z0-9] and most important it should be between 5 to 50 chars.
    let re = /^(([#a-zA-Z0-9])[\/\-,( )._#a-zA-Z0-9]{4,49})$/;
    let str = address.value;

    if (re.test(str)) {
        address.classList.remove('is-invalid');
        addressValid = true;
    } else {
        address.classList.add('is-invalid');
        addressValid = false;
    };
};

// Added function to validate from Reg Ex, from blur event.
function blurMessage() {
    // Here we are taking starting char of [a-zA-Z0-9] without any symbol we have to write message.
    let re = /^([a-zA-Z0-9. ]){2,100}$/;
    let str = message.value;
    if (re.test(str)) {
        message.classList.remove('is-invalid');
        messageValid = true;
    } else {
        message.classList.add('is-invalid');
        messageValid = false;
    };
};

// Taking notification IDs here.
let success = document.getElementById("success");
let failure = document.getElementById("failure");


// validating all form data from submit ID.
let submit = document.getElementById("submit");
submit.addEventListener("click", submitData);

// Adding Submit function
function submitData(e) {
    e.preventDefault();
    // Checking the form is properly filled. then we will show notification.
    if (userNameValid && emailValid && phoneValid && addressValid && messageValid) {
        success.classList.remove('d-none');
        setTimeout(() => {
            success.classList.add('d-none');
        }, 8000);

    } else {
        failure.classList.remove('d-none');
        setTimeout(() => {
            failure.classList.add('d-none');
        }, 8000);
    };
};