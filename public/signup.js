const signupForm = document.getElementById('signupForm');
const email = document.getElementById('emailSignup');
const password = document.getElementById('passwordSignup');

const signupUser = async () => {
    const sendBody = {
        email: email.value,
        password: password.value
    };

    const res = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendBody)
    });

    if (res.status === 200) {
        alert('User Signed Up!');
        window.location = '/';
    } else {
        alert('Error signing up');
    }
};

signupForm.addEventListener('submit', e => {
    e.preventDefault();
    signupUser();
});
