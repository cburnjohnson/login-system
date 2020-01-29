const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

const validateLogin = () => {
    const sendBody = {
        email: emailInput.value,
        password: passwordInput.value
    };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendBody)
    }).then(res => {
        if (res.status === 200) {
            alert('successfully logged in');
            window.location = '/success.html';
        } else {
            alert('Error logging in');
        }
    });
};

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    validateLogin();
});
