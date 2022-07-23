const form = document.querySelector('.form');
const userName = document.querySelector('#name');
const emailinput = document.querySelector('#email');
const textArea = document.querySelector('#Text-Area');
const errorMessage = document.querySelector('.error-message');
function validateform() {}
function isemailValid() {}
let email;
form.addEventListener('submit', (events) => {
  events.preventDefault();
    if (emailinput.value.trim() === '') {
        errorMessage.textContent = 'email can not be empty';
    }
    else
        form.remove(); 
});
