// function toggleMenuOnVerticall(
//     titleContainer,
//     optionsWrapper,
//     icon
// ): void{
//     titleContainer.onclick = function(){
//         optionsWrapper.classList.toggle('active')
//         icon.classList.toggle('active')
//     }
//     window.addEventListener('click', function(e: Event){
//         let target: object = e.target
//         if (target != titleContainer && target != optionsWrapper){
//             optionsWrapper.classList.remove('active')
//             icon.classList.remove('active')
//         }
//     })
// }
;
(function () {
    var addCateBtn = document.querySelector('.add-category');
    var overlay = document.querySelector('.overlay');
    var categoryContainer = document.querySelector('.category-container');
    var closeCategoryBtn = document.querySelector('.close-category-container');
    addCateBtn.onclick = function () {
        overlay.classList.add('active');
        categoryContainer.classList.add('active');
    };
    overlay.onclick = function () {
        overlay.classList.remove('active');
        categoryContainer.classList.remove('active');
    };
    closeCategoryBtn.onclick = function () {
        overlay.classList.remove('active');
        categoryContainer.classList.remove('active');
    };
})();
;
(function () {
    var prdCoverPhotoContainer = document.getElementById('prdCoverPhoto');
    var chooseCoverPhotoInp = document.getElementById('choosePrdCoverPhoto');
    chooseCoverPhotoInp.onchange = function () {
        var file = chooseCoverPhotoInp.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                prdCoverPhotoContainer.src = this.result + '';
            };
        }
    };
})();
(function () {
    var btnAddNewProduct = document.querySelector('.add-prd-btn');
    var prdContainer = document.querySelector('.prd-container');
    btnAddNewProduct.onclick = function () {
        prdContainer.innerHTML += "\n        <div class=\"prd\">\n                            <div class=\"product-delete-container\">\n                                <button class=\"product-delete-btn\">\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\">\n                                        <path d=\"M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z\"></path><path d=\"M9 10h2v8H9zm4 0h2v8h-2z\"></path>\n                                    </svg>\n                                    <span class=\"product-delete-title\">Xo\u00E1 s\u1EA3n ph\u1EA9m n\u00E0y</span>\n                                </button>\n                            </div>\n                            <div class=\"prd-info-wrapper\">\n                                    <div class=\"add-comp add-comp-prd comp-color\">\n                                        <span class=\"add-comp-title add-comp-color-title\">M\u00E0u s\u1EAFc</span>\n                                        <input type=\"text\" placeholder=\"VD: Tr\u1EAFng ng\u1ECDc trai\" class=\"add-comp-input add-comp-color-input\" name=\"color\" id=\"txtColor\">\n                                        <span class=\"add-comp-notify add-comp-color-notify text-red-500\" id=\"tbColor\">(*)</span>\n                                    </div>\n                                    <div class=\"add-comp add-comp-prd comp-quantity\">\n                                        <span class=\"add-comp-title add-comp-quantity-title\">S\u1ED1 l\u01B0\u1EE3ng</span>\n                                        <input type=\"text\" placeholder=\"VD: 20\" class=\"add-comp-input add-comp-quantity-input\" name=\"quantity\" id=\"txtQty\">\n                                        <span class=\"add-comp-notify add-comp-quantity-notify text-red-500\" id=\"tbQty\">(*)</span>\n                                    </div>\n                                    <div class=\"add-comp add-comp-prd comp-price\">\n                                        <span class=\"add-comp-title add-comp-price-title\">Gi\u00E1 ni\u00EAm y\u1EBFt</span>\n                                        <input type=\"text\" placeholder=\"VD: 3000000\" class=\"add-comp-input add-comp-price-input\" name=\"price\" id=\"txtPrice\">\n                                        <span class=\"add-comp-notify add-comp-price-notify text-red-500\" id=\"tbPrice\">(*)</span>\n                                    </div>\n                                </div>\n                                <div class=\"prd-images-container\">\n                                    <div class=\"prd-images-header\">\n                                        <span>C\u00E1c \u1EA3nh c\u1EE7a s\u1EA3n ph\u1EA9m</span>\n                                        <input type=\"file\" multiple class=\"prd-image-choose\" name=\"listImage\">\n                                    </div>\n                                    <div class=\"prd-images-wrapper\">\n                                            \n                                    </div>\n                                </div>\n                            </div>\n        ";
        (function () {
            var deletePrdBtnList = document.getElementsByClassName('product-delete-btn');
            var _loop_1 = function (i) {
                var tmpBtn = deletePrdBtnList[i];
                tmpBtn.onclick = function () {
                    var prdList = document.getElementsByClassName('prd');
                    prdList[i].remove();
                };
            };
            for (var i = 0; i < deletePrdBtnList.length; ++i) {
                _loop_1(i);
            }
        })();
        (function () {
            var btnAddImageForPrdInpList = document.getElementsByClassName('prd-image-choose');
            var prdImagesWrapperList = document.getElementsByClassName('prd-images-wrapper');
            var _loop_2 = function (i) {
                var tmpAddImgBtn = btnAddImageForPrdInpList[i];
                tmpAddImgBtn.onchange = function () {
                    var imgFileList = tmpAddImgBtn.files;
                    if (imgFileList.length !== 0) {
                        for (var j = 0; j < imgFileList.length; ++j) {
                            var tmpReader = new FileReader();
                            tmpReader.readAsDataURL(imgFileList[j]);
                            tmpReader.onload = function () {
                                var imgSrc = this.result + '';
                                prdImagesWrapperList[i].innerHTML += "\n                                    <figure class=\"prd-image-frame\">\n                                        <img src=\"".concat(imgSrc, "\" alt=\"\" class=\"prd-image\">\n                                    </figure>\n                                ");
                            };
                        }
                    }
                };
            };
            for (var i = 0; i < btnAddImageForPrdInpList.length; ++i) {
                _loop_2(i);
            }
        })();
    };
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
        fetch("http://localhost:8080/api/bags/search/keyword?keyword=".concat(keyword))
            .then(function (response) { return response.json(); })["catch"](function (e) { return console.log(e.get); })
            .then(function (data) {
            if (data) {
                searchOrderSuggesstionContainer.classList.add('active');
                for (var i = 0; i < data.length; ++i) {
                    var bagCate = JSON.parse(data[i]);
                    searchOrderSuggesstionContainer.innerHTML +=
                        "<a href=\"\" class=\"product-search-suggesstion\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" style=\"fill: rgba(0, 0, 0, 1);\"\n                                class=\"\">\n                                    <path d=\"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z\"></path>\n                                </svg>\n                                <span class=\"search-product-cateId\">".concat(bagCate['bagCateID'], "</span>\n                                <div class=\"search-product-other\">\n                                    <span class=\"search-product-name\">").concat(bagCate['name'], "</span>\n                                    <span class=\"search-product-brand\">").concat(bagCate['brand'], "</span>\n                                </div>\n</div>\n\t\t\t\t\t\t    </a>");
                }
            }
        });
    });
})();
