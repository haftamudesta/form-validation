const form = document.querySelector('.form');
const userName = document.querySelector('#name');
const emailinput = document.querySelector('#email');
const TextArea = document.querySelector('#Text-Area');
const errorMessage = document.querySelector('.error-message');
function validateform() {
}
function isemailValid() {
}
function errorMessages() {
}
let email;
let message
form.addEventListener('submit', (events) => {
  events.preventDefault();
  validateform();
});
validateform(); {
  if (userName.value.trim() === '') {
    errorMessages('name can not be empty')
  } else if (emailinput.value.trim() === '') {
    errorMessages('email can not be empty')
  } else if (!isemailValid(emailinput.value.trim())) {
    errorMessages('invalid email,please provide valid email')
  } else if (TextArea.value.trim() === '') {
      errorMessage.style.display = 'block';
      errorMessages('text area can not be empty')
    
  } else {
    errorMessage.style.display = 'none';
  }
}
isemailValid(email); {
  const re = /^[a-z-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(String(email));
}
errorMessages(message);{
    errorMessage.style.display = 'block';
    errorMessage.textContent =message ;
}
