const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const signupLink = document.querySelector('.signup-link');

signupLink.onclick = () => {
    container.classList.add('active');
}

loginLink.onclick = () => {
    container.classList.remove('active'); 
}

// Sign Up click 
signupLink.addEventListener('click', () => {
    container.classList.add('active');
});

//  Sign In click
loginLink.addEventListener('click', () => {
    container.classList.remove('active');
});
