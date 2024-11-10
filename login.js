document.getElementById('switchToRegister').addEventListener('click', function() {
    document.querySelector('.login-container').style.transform = 'translateX(-100%)';
    document.querySelector('.register-container').style.transform = 'translateX(0)';
});

document.getElementById('switchToLogin').addEventListener('click', function() {
    document.querySelector('.register-container').style.transform = 'translateX(100%)';
    document.querySelector('.login-container').style.transform = 'translateX(0)';
});
