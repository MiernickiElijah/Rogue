// Assignment Code
var generateBtn = document.querySelector("#generate");

//user inputs:
var userLength;
var userLower;
var userUpper;
var userInteger;
var userSpecial;

//.fromCharCode = cheatsheet: https://net-comber.com/charset.html //
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const integer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const special = ["!", "@", "#", "%", "+", "\\", "/", "'", "$", "^", "?", ":", ",", "(", ")", "[", "]", "{", "}", "~", "-", "_"]
const sumAll = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "@", "#", "%", "+", "\\", "/", "'", "$", "^", "?", ":", ",", "(", ")", "[", "]", "{", "}", "~", "-", "_"]


var passwordResult = []

//prompts and selections//
function generatePassword() {
    var possibleChar = "";
    var userLength = parseInt(prompt("Please select a length of password between 8 and 128 characters)"));

    if (userLength => 8 && userLength <= 128) {

        var userLower = confirm("Please select if you would like to include lowercase letters");
        var userUpper = confirm("Please select if you would like to include uppercase letters");
        var userInteger = confirm("Please select if you would like to include numbers");
        var userSpecial = confirm("Please select if you would like to include special characters");

        //nothing selected//
        if (!userLower && !userUpper && !userInteger && !userSpecial) {
            alert("You must select at least one option")
            return generatePassword();
        }
        //selected options//
        if (userLower == true) {
            let v = Math.floor(Math.random() * lower.length + 1);
            let newChar = lower[v];
            possibleChar += newChar;
        }

        if (userUpper == true) {
            let v = Math.floor(Math.random() * upper.length + 1);
            let newChar = upper[v];
            possibleChar += newChar;
        }

        if (userInteger == true) {
            let v = Math.floor(Math.random() * integer.length + 1);
            let newChar = integer[v];
            possibleChar += newChar;
        }

        if (userSpecial == true) {
            let v = Math.floor(Math.random() * special.length + 1);
            let newChar = special[v];
            possibleChar += newChar;
        }
        //all other characters in user selected length from sumAll array//
        for (i = 0; i < userLength - possibleChar.length; i++) {
            let v = Math.floor(Math.random() * sumAll.length + 1);
            let newChar = sumAll[v];
            possibleChar += newChar;
        }
    }

    if (userLength == null) {
        alert("You must designate a password length between 8-128 characters");
        return generatePassword();

    } else if (userLength < 8 || userLength > 128) {
        userLength = parseInt(prompt("You must designate a password length between 8 and 128 characters"));
        generatePassword()
        return;
    }
    return possibleChar
};


// Write password to the #password input//
function writePassword() {
    var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};


generateBtn.addEventListener("click", writePassword);