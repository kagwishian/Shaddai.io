const forms = document.querySelector('.in');

forms.addEventListener('submit', (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(forms.email.value, forms.password.value).then(() => {
        location.href = `../admin/create.html`;
    })
})

