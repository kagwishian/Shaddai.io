// // Form validation

const form = document.querySelector('.in');
console.log(form);
console.log('Button clicked!')

const validPassword = () => {
    const password = form.password.value;
    const passwordError = document.querySelector('#password-error');

    if (password) {
        if (password.length >= 6) {
            passwordError.style.display = 'none';
            return 1;
        } else {
            passwordError.textContent = 'Password should be atleat 6 characters!';
            passwordError.style.display = 'block';
        }
    } else {
        passwordError.textContent = 'This field is required!';
        passwordError.style.display = 'block';
    }
}

const validEmail = () => {
    const email = form.email.value.split('@');
    const value = form.email.value;
    const emailError = document.querySelector('#email-error')

    if (email.length > 1) {
        if (email[0] && email[1]) {
            emailError.style.display = 'none';
            return 1;
        } else {
            emailError.textContent = 'Invalid email!';
            emailError.style.display = 'block'

        }
    } else {
        if (value) {
            emailError.textContent = 'Enter a valid email';
            emailError.style.display = 'block';
        } else {
            emailError.textContent = 'This field is required!';
            emailError.style.display = 'block'
        }
    }
}

form.addEventListener('submit', (event) => {
    console.log("HEY");
    event.preventDefault();
    let email = validEmail();
    let password = validPassword();
})