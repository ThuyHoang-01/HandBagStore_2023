;
(function () {
    var menu = document.querySelector('.menu');
    var userAvatar = document.querySelector('.avatar');
    userAvatar.onclick = function () {
        menu.classList.toggle('active');
    };
    window.addEventListener('click', function (e) {
        if (e.target != userAvatar && e.target != menu) {
            menu.classList.remove('active');
        }
    });
})();
