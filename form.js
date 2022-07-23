const form = document.querySelector('.form');
const userName = document.querySelector('#name');
const emailinput = document.querySelector('#email');
const TextArea = document.querySelector('#Text-Area');
const errorMessage = document.querySelector('.error-message');
function validateform() {
}
function isemailValid() {
}
let email;
form.addEventListener('submit', (events) => {
  events.preventDefault();
  validateform();
});
validateform(); {
  if (userName.value.trim() === '') {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'name can not be empty';
  } else if (emailinput.value.trim() === '') {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'email can not be empty';
  } else if (!isemailValid(emailinput.value.trim())) {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'invalid email,please provide valid email';
  } else if (TextArea.value.trim() === '') {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'text area can not be empty';
  } else {
    errorMessage.style.display = 'none';
  }
}
isemailValid(email); {
  const re =/^[a-z-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(String(email));
}
