function setMinHeightForLeftAndRightComponents() {
    var loginLeftComponent = document.querySelector('.login__left');
    var loginRightComponent = document.querySelector('.login__right');
    var innerWidth = window.innerWidth;
    if (innerWidth >= 768) {
        var avaiHeight = window.outerHeight;
        loginLeftComponent.style.minHeight = avaiHeight + 'px';
        loginRightComponent.style.minHeight = avaiHeight + 'px';
    }
    else {
        loginLeftComponent.style.minHeight = 'auto';
        loginRightComponent.style.minHeight = 'auto';
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
    var emailInput = document.querySelector('#emailInput');
    var passwordInput = document.querySelector('#passwordInput');
    var btnLogin = document.querySelector('#btnLogin');
    emailInput.addEventListener('blur', function () {
        if (emailInput.value.trim() === '') {
            emailInput.parentElement.classList.add('error');
            emailInput.nextElementSibling.textContent = 'Tên đăng nhập không được để trống!';
        }
        else {
            emailInput.parentElement.classList.remove('error');
            emailInput.nextElementSibling.textContent = '';
        }
    });
    passwordInput.addEventListener('blur', function () {
        if (passwordInput.value.trim() === '') {
            passwordInput.parentElement.classList.add('error');
            passwordInput.nextElementSibling.textContent = 'Mật  khẩu không được để trống!';
        }
        else {
            passwordInput.parentElement.classList.remove('error');
            passwordInput.nextElementSibling.textContent = '';
        }
    });
    form.addEventListener('submit', function (e) {
        if (!validateUserInput(emailInput.value.trim(), passwordInput.value.trim()))
            e.preventDefault();
    });
    function validateUserInput(username, password) {
        if (username === '') {
            emailInput.focus();
            return false;
        }
        if (password === '') {
            passwordInput.focus();
            return false;
        }
        return true;
    }
})();
