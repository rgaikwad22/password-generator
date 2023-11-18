var copyText = document.querySelector(".clip-input"),
    copy = document.querySelector(".clipboard-icon"),
    passwordLength = document.querySelector("#password-length"),
    upperCase = document.querySelector("#uppercase-letters"),
    lowerCase = document.querySelector("#lowercase-letters"),
    numbers = document.querySelector("#numbers"),
    symbols = document.querySelector("#symbols"),
    generatePass = document.querySelector(".generate-pass-btn");


var upperTextSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerTextSet = "abcdefghijklmnopqrstuvwxyz",
    numberSet = "1234567890",
    specialSymbolsSet = "~!@#$%^&*()_+?/";

var password;

function getRandomData(data) {
    return data[Math.floor(Math.random() * data.length)]
}

function generatePassword(password = "") {
    if (upperCase.checked) {
        password += getRandomData(upperTextSet);
    }
    if (lowerCase.checked) {
        password += getRandomData(lowerTextSet);
    }
    if (numbers.checked) {
        password += getRandomData(numberSet);
    }
    if (symbols.checked) {
        password += getRandomData(specialSymbolsSet);
    }
    if(password.length < passwordLength.value) {
        return generatePassword(password);
    }
    copyText.value = modifyString(password, passwordLength.value);
    copyText.focus()
}

generatePass.addEventListener("click", function (e) {
    e.preventDefault();
    generatePassword();
})

function modifyString (str, num) {
    if(str.length > num) {
        var substr = str.substring(0, num);
        return substr;
    } else {
        return str;
    }
}

copy.addEventListener("click", function () {
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
    setTimeout(function () {
        alert("Copied the text: " + copyText.value);
    }, 100);
})

window.addEventListener("load", function () {
    upperCase.checked = true;
    lowerCase.checked = true;
    numbers.checked = true;
    symbols.checked = true;
});