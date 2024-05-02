
// const DOMstrings = {
//      name: document.getElementById('name'),
//      email: document.getElementById('email'),
//      phone: document.getElementById('phone'),   
//      message: document.getElementById('textarea'),
//      nameError: document.querySelector('.name-error'),
//      emailError: document.querySelector('.email-error'),
//      phoneError: document.querySelector('.phone-error'),
//      massageError: document.querySelector('.textarea')
// }

// Contact form validation 

const formContact = document.getElementById('form-contact');


const validateName = () => {
    
    const name = document.getElementById('name');
    const nameError = document.querySelector('.name-error');
    const names = name.value;
    if (names == '') {
        nameError.textContent = 'Name is required!';
        nameError.style.display = 'block';
        name.style.border = '1px solid #ff0033'
        return 1
    } else {
        nameError.style.display = 'none';
        name.style.border = '1px solid white'
    }
}

const validateEmail = () => {
    const email = document.getElementById('email');
    email.value.split('@');
    let value = email.value;
    const emailError = document.querySelector('.email-error');
    

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


formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Button clicked!');
    // name = validateName();
    // email = validateEmail();
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getUTCDate();
    db.collection('Messages').add({
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value,
        date: `${day}/${month}/${year}`,
    }).then(() => {
        alert(`Message sent`);
    }).catch((error) => {
        alert(error)
    })

});

////////////////////////////////////////////
// const id = uuidv4();
