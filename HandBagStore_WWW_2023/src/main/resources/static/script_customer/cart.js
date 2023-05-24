;
(function () {
    function renderCartEmpty() {
        var cartWrapper = document.querySelector('.cart-wrapper');
        cartWrapper.innerHTML = "\n\t\t    <div class=\"cart-empty\">\n\t\t        <div class=\"cart-empty-top\">\n\t\t            <h1 class=\"cart-empty-title\">\n\t\t                Gi\u1ECF h\u00E0ng c\u1EE7a b\u1EA1n hi\u1EC7n \u0111ang tr\u1ED1ng\n\t\t            </h1>\n\t\t            <h2 class=\"cart-empty-suggestion\">\n\t\t                H\u00E3y \u0111\u0103ng nh\u1EADp \u0111\u1EC3 xem gi\u1ECF h\u00E0ng c\u1EE7a b\u1EA1n. Ho\u1EB7c ti\u1EBFp t\u1EE5c mua s\u1EAFm th\u00F4i n\u00E0o!\n\t\t            </h2>\n\t\t        </div>\n\t\t        <div class=\"cart-empty-bottom\">\n\t\t            <a href=\"login.html\" class=\"cart-empty-bottom-button cart-empty-login\">\n\t\t                \u0110\u0103ng nh\u1EADp\n\t\t            </a>\n\t\t            <a href=\"index.html\" class=\"cart-empty-bottom-button cart-empty-goShopping\">\n\t\t                Ti\u1EBFp t\u1EE5c mua s\u1EAFm\n\t\t            </a>\n\t\t        </div>\n\t\t    </div>";
    }
    var btnMinus = document.querySelectorAll('.quantity-minus');
    var btnPlus = document.querySelectorAll('.quantity-add');
    var btnDelete = document.querySelectorAll('.item-deleteBtn');
    btnPlus.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            var bagId = btn.parentElement.parentElement.parentElement.firstElementChild;
            var userId = btn.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling;
            var orderQuantity = btn.previousElementSibling;
            var quantity = parseInt(orderQuantity.innerText) + 1;
            fetch("http://localhost:8080/api_cart/update?bagID=".concat(bagId.value, "&userID=").concat(userId.value, "&quantity=").concat(quantity), {
                method: 'PUT'
            })
                .then(function (resp) { return resp.text(); })
                .then(function (data) {
                if (data === 'success')
                    location.reload();
            });
        });
    });
    btnMinus.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            var bagId = btn.parentElement.parentElement.parentElement.firstElementChild;
            var userId = btn.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling;
            var orderQuantity = btn.nextElementSibling;
            var quantity = parseInt(orderQuantity.innerText);
            if (quantity === 1)
                return;
            quantity -= 1;
            fetch("http://localhost:8080/api_cart/update?bagID=".concat(bagId.value, "&userID=").concat(userId.value, "&quantity=").concat(quantity), {
                method: 'PUT'
            })
                .then(function (resp) { return resp.text(); })
                .then(function (data) {
                if (data === 'success')
                    location.reload();
            });
        });
    });
    btnDelete.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            var bagId = btn.parentElement.parentElement.firstElementChild;
            var userId = btn.parentElement.parentElement.firstElementChild.nextElementSibling;
            fetch("http://localhost:8080/api_cart/delete?bagID=".concat(bagId.value, "&userID=").concat(userId.value), {
                method: 'DELETE'
            })
                .then(function (resp) { return resp.text(); })
                .then(function (data) {
                if (data === 'success')
                    location.reload();
            });
        });
    });
})();
