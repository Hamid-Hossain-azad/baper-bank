document.getElementById('login-submit').addEventListener('click', function () {
    //getuser email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'azad@gmail.com' && userPassword == 'azad') {
        window.location.href = 'banking.html';

    }
})