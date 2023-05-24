function setMinHeightForLeftAndRightComponents() {
    var registerLeftComponent = document.querySelector('.register__left');
    var registerRightComponent = document.querySelector('.register__right');
    var innerWidth = window.innerWidth;
    if (innerWidth >= 768) {
        var avaiHeight = window.outerHeight;
        registerLeftComponent.style.minHeight = avaiHeight + 'px';
        registerRightComponent.style.minHeight = avaiHeight + 'px';
    }
    else {
        registerLeftComponent.style.minHeight = 'auto';
        registerRightComponent.style.minHeight = 'auto';
    }
}
function setAnimationWhenFirstLoadingPage() {
    var loginComponent = document.querySelector('.login');
    this.setTimeout(function () {
        loginComponent.classList.add('active');
    }, 200);
}
;
(function () {
    window.addEventListener('load', function () {
        setMinHeightForLeftAndRightComponents();
        setAnimationWhenFirstLoadingPage();
    });
    window.addEventListener('resize', function () {
        setMinHeightForLeftAndRightComponents();
    });
})();
;
(function () {
    var form = document.querySelector('.main-form');
    var firstNameInput = document.querySelector('#firstName');
    var lastNameInput = document.querySelector('#lastName');
    var emailInput = document.querySelector('#emailInput');
    var passwordInput = document.querySelector('#passwordInput');
    firstNameInput.addEventListener('blur', function () {
        validateFirstName(firstNameInput.value.trim());
    });
    lastNameInput.addEventListener('blur', function () {
        validateLastName(lastNameInput.value.trim());
    });
    emailInput.addEventListener('blur', function () {
        validateUserName(emailInput.value.trim());
    });
    passwordInput.addEventListener('blur', function () {
        validatePassword(passwordInput.value.trim());
    });
    form.addEventListener('submit', function (e) {
        if (!validateFirstName(firstNameInput.value.trim()) || !validateLastName(lastNameInput.value.trim()) ||
            !validatePassword(passwordInput.value.trim()) || !validateUserName(emailInput.value.trim()))
            e.preventDefault();
    });
    function validateFirstName(firstName) {
        firstNameInput.parentElement.classList.remove('error');
        firstNameInput.nextElementSibling.textContent = '';
        if (firstName === '') {
            firstNameInput.parentElement.classList.add('error');
            firstNameInput.nextElementSibling.textContent = 'Họ  không được để trống!';
            return false;
        }
        return true;
    }
    function validateLastName(lastName) {
        lastNameInput.parentElement.classList.remove('error');
        lastNameInput.nextElementSibling.textContent = '';
        if (lastName === '') {
            lastNameInput.parentElement.classList.add('error');
            lastNameInput.nextElementSibling.textContent = 'Tên không được để trống!';
            return false;
        }
        return true;
    }
    function validateUserName(userName) {
        emailInput.parentElement.classList.remove('error');
        emailInput.nextElementSibling.textContent = '';
        if (userName === '') {
            emailInput.parentElement.classList.add('error');
            emailInput.nextElementSibling.textContent = 'Tên đăng nhập không được trống!';
            return false;
        }
        return true;
    }
    function validatePassword(password) {
        passwordInput.parentElement.classList.remove('error');
        passwordInput.nextElementSibling.textContent = '';
        if (password === '') {
            passwordInput.parentElement.classList.add('error');
            passwordInput.nextElementSibling.textContent = 'Mật khẩu không được để trống!';
            return false;
        }
        if (password.length < 6) {
            passwordInput.parentElement.classList.add('error');
            passwordInput.nextElementSibling.textContent = 'Mật khẩu phải có ít nhất  6 ký tự!';
            return false;
        }
        return true;
    }
})();
