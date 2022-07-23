const form = document.querySelector(".form");
const userName = document.querySelector("#name");
const emailinput = document.querySelector("#email");
const textArea = document.querySelector("#Text-Area");
const errorMessage = document.querySelector(".error-message");
let email;
let message;
form.addEventListener('submit', (events) => {
    events.preventDefault();
    validateform();
});
function validateform() {
    if (userName.value.trim() == '') {
        errorMessage.style.display = "block";
        errorMessage.textContent = 'name can not be empty';
    } else{
        errorMessage.style.display = "none";
    }
    if (emailinput.value.trim() == "") {
        errorMessage.style.display = "block";
      errorMessage.textContent = 'email can not be empty';
    }
    else if (!isemailValid(emailinput.value.trim())) {
        errorMessage.style.display = "block";
        errorMessage.textContent = 'your emaial is invalid, please enter valid email';
    }
    else {
        errorMessage.style.display = "none"; 
    }
    if (textArea.value.trim() == "") {
        errorMessage.style.display = "block";
      errorMessage.textContent = 'email can not be empty';
    }
    else {
        errorMessage.style.display = "none"; 
    }
}
function isemailValid(){
    const re =/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    return re.test(String(email));
  }

