let passwordChecklist = document.querySelectorAll(".list-item");
let passwordInp = document.querySelector(".password-input");
let header = document.querySelector(".checklist-title");

//check password strength
function checkPasswordStrength(password) {
    var strength = 0;

    if (password.length >= 12) {
        strength += 1; // Length check
    }
    if (/[A-Z]/.test(password)) {
        strength += 1; // Uppercase letter check
    }
    if (/[a-z]/.test(password)) {
        strength += 1; // Lowercase letter check
    }
    if (/\d/.test(password)) {
        strength += 1; // Digit check
    }
    if (/[\W_]/.test(password)) {
        strength += 1; // Special character check wihtout space
    }
    
    return strength;
}

let validationRegex = [
    { regex: /.{12,}/},
    {regex: /[0-9]/},
    {regex: /[A-Z]/},
    {regex: /[a-z]/},
    {regex: /[\W_]/}
]

let x = 0

passwordInp.addEventListener("keyup", () => {
    validationRegex.forEach((item, i) => {



        let isValid = item.regex.test(passwordInp.value);
        if (isValid) {
            passwordChecklist[i].classList.add("checked");
            x++;
        }
        else {
            passwordChecklist[i].classList.remove("checked");
            x--;
        }
    });
});
document.getElementById("submit").onclick = function() {
    var password = document.getElementById("password").value;
    var strength = checkPasswordStrength(password);
    alert("Password Strength: " + strength + " out of 5");
}