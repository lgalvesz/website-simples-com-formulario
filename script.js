const usuario = document.querySelector('#usuario');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const confirmacaoSenha = document.querySelector('#confirmacao-senha');

const form = document.querySelector('#registro');
const toggleSenha = document.querySelector('#toggleSenha');
const toggleConfirmacaoSenha = document.querySelector('#toggleConfirmacaoSenha');

const showError = (input, message) => {
    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;

}

const showSuccess = (input, message) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
    
}

const checkUsername = () => {

}

const checkEmail = () => {
    
}

const checkPassword = () => {
    
}

const checkConfirmPassword = () => {
    
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const isUserNameValid = checkUsername();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
    const isConfirmPasswordValid = checkConfirmPassword();

    if (isUserNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid) {
            window.location.href = "./index.html";
        }
});