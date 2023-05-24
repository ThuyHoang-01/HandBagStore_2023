;
(function () {
    var orderViewOptionTitle = document.querySelector('.order-viewOptions-title');
    var orderViewOptions = document.querySelector('.order-viewOptions');
    var orderViewOptionChevronIcon = document.querySelector('.order-viewOptions-chevron');
    orderViewOptionTitle.onclick = function (e) {
        orderViewOptions.classList.toggle('active');
        orderViewOptionChevronIcon.classList.toggle('active');
    };
    window.addEventListener('click', function (e) {
        if (e.target != orderViewOptionTitle && e.target != orderViewOptions) {
            orderViewOptions.classList.remove('active');
            orderViewOptionChevronIcon.classList.remove('active');
        }
    });
})();
