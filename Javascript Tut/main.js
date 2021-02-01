const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const user = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (name.value === '' || email.value === '') {
        msg.innerHTML = 'Please enter all fields';
    } else {
        console.log('success');
    }
}