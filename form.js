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
  validateform();
});
validateform();
{
    if (emailinput.ariaValueMax.trim() === '') {
        errorMessage.textContent = 'email can not be empty';
    }
    else
        return true; 
}
// isemailValid(email);
// {
//   const re = /^[a-z-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z-Z0-9-]+(?:\.[a-z-Z0-9-]+)*$/;
//   return re.test(email);
// }
