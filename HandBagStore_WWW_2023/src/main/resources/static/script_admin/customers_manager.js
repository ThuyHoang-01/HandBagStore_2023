function toggleMenuOnVerticall(titleContainer, optionsWrapper, icon) {
    titleContainer.onclick = function () {
        optionsWrapper.classList.toggle('active');
        icon.classList.toggle('active');
    };
    window.addEventListener('click', function (e) {
        var target = e.target;
        if (target != titleContainer && target != optionsWrapper) {
            optionsWrapper.classList.remove('active');
            icon.classList.remove('active');
        }
    });
}
;
(function () {
    toggleMenuOnVerticall(document.querySelector('.admin-customer-viewOptions-title'), document.querySelector('.admin-customer-viewOptions'), document.querySelector('.admin-customer-viewOptions-icon'));
})();
(function () {
    var orderSearchInput = document.querySelector('.order-search-input');
    var searchOrderSuggesstionContainer = document.querySelector('.search-order-suggesstion-container');
    orderSearchInput.addEventListener('input', function () {
        searchOrderSuggesstionContainer.classList.remove('active');
        searchOrderSuggesstionContainer.innerHTML = '';
        var keyword = orderSearchInput.value;
        if (keyword === '') {
            searchOrderSuggesstionContainer.classList.remove('active');
            searchOrderSuggesstionContainer.innerHTML = '';
            return;
        }
        fetch("http://localhost:8080/api_customer_admin/search?keyword=".concat(keyword))
            .then(function (response) { return response.json(); })["catch"](function (e) { return console.log(e.get); })
            .then(function (data) {
            if (data) {
                searchOrderSuggesstionContainer.classList.add('active');
                for (var i = 0; i < data.length; ++i) {
                    var customer = JSON.parse(data[i]);
                    searchOrderSuggesstionContainer.innerHTML +=
                        "<a href=\"\" class=\"order-search-suggesstion\">\n\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" style=\"fill: rgba(0, 0, 0, 1);\"\n\t\t\t\t\t\t\tclass=\"\">\n\t\t\t\t\t\t\t\t<path d=\"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z\"></path>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t<span class=\"search-order-cusPhone\">".concat(customer['cusID'], "</span>\n\t\t\t\t\t\t\t<span class=\"search-order-orderDate\">").concat(customer['firstName'], "</span>\n\t\t\t\t\t\t\t<span class=\"search-order-orderDate\">").concat(customer['lastName'], "</span>\n\t\t\t\t\t\t\t<span class=\"search-order-orderDate\">").concat(customer['phone'], "</span>\n\t\t\t\t\t\t</a>");
                }
            }
        });
    });
})();
