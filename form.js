const form = document.querySelector('.form');
const userName = document.querySelector('#name');
const emailinput = document.querySelector('#email');
const textArea = document.querySelector('#Text-Area');
const errorMessage = document.querySelector('.error-message');
function validateform() { }
function userName() { }
function textArea() { }
function email() {}
function isemailValid() {}
let email;
form.addEventListener('submit', (events) => {
  events.preventDefault();
  validateform();
});
validateform(); {
    userName();
    extArea();
    email();
  
}
userName(); { 
    if (userName.value.trim() === '') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'name can not be empty';
      } else {
        errorMessage.style.display = 'none';
      }
}
textArea(); {
    if (textArea.value.trim() === '') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'text area can not be empty';
      } else {
        errorMessage.style.display = 'none';
      }
}
email(); {
    if (emailinput.value.trim() === '') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'email can not be empty';
      } else if (!isemailValid(emailinput.value.trim())) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'your emaial is invalid, please enter valid email';
      } else {
        errorMessage.style.display = 'none';
      }
}
isemailValid(); {
  const re = /^[a-z-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(String(email));
}
