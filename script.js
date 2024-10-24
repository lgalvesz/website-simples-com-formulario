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

};

const showSuccess = (input, message) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const success = formField.querySelector('small');
    success.textContent = '';
    
}

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isPasswordSecure = (senha) => {
    const re = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");
    return re.test(senha);
}

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const checkUsername = () => {
    let valid = false;
    const min = 3;
    const max = 25;
    const usuarioVal = usuario.valid.trim();

    if (!isRequired(usuarioVal)) {
        showError(usuario, 'Usuário não pode ficar em branco.');
    } else if (!isBetween(usuarioVal.lenght, min, max)) {
        showError(usuario, `Usuário deve ter entre ${min} e ${max} caracteres.`);
    } else {
        showSuccess(usuario);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;

    const emailVal = email.value.trim();

    if (!isRequired(emailVal)) {
        showError(email, 'E-mail não pode ficar em branco.');
    } else if (!isEmailValid(emailVal)) {
        showError(email, 'E-mail inválido.');
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
}

const checkPassword = () => {
    let valid = false;

    const senhaVal = senha.value.trim();

    if (!isRequired(senhaVal)) {
        showError(senha, 'Senha não pode ficar em branco.');
    } else if (!isPasswordSecure(senhaVal)) {
        showError(senha, 'Senha tem que ter no mínimo 8 caracteres que incluem pelo menos 1 caractere minúsculo, 1 caractere maiúsculo, 1 número e 1 caractere especial (!@#$%^&*)');
    } else {
        showSuccess(senha);
        valid = true;
    }
    return valid;
}

toggleSenha.addEventListener("click", function () {
    const type = senha.getAttribute("type") === "password" ? "text" : "password";
    senha.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});

toggleConfirmacaoSenha.addEventListener("click", function () {
    const type = confirmacaoSenha.getAttribute("type") === "password" ? "text" : "password";
    confirmacaoSenha.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});

const checkConfirmPassword = () => {
    let valid = false;
    const confirmacaoSenhaVal = confirmacaoSenha.value.trim();
    const senhaVal = senha.value.trim();

    if (!isRequired(confirmacaoSenhaVal)) {
        showError(confirmacaoSenha, 'Confirmação de senha não pode ficar em branco.');
    } else if (senhaVal !== confirmacaoSenhaVal) {
        showError(confirmacaoSenha, 'Senha e confirmação de senha são diferentes.');
    } else {
        showSuccess(confirmacaoSenha);
        valid = true;
    }
    return valid;
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