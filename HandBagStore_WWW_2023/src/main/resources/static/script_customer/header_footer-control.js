;
(function () {
    var headerSearch = document.querySelector('.header-search');
    var overlayDropdown = document.querySelector('.dropdown__overlay');
    var searchFieldInput = document.querySelector('.search-field__input');
    var searchBoxContainsClearAndSearchBtn = document.querySelector('.search-box__button-wrapper');
    var searchIcon = document.querySelector('.search-field__search-icon');
    var suggestionSearchDropdown = document.querySelector('.dropdown');
    var closeSearchIcon = document.querySelector('.search-box__button-wrapper-close-icon');
    var absoluteMenuLeft = document.querySelector('.prdFilter-nav');
    var menuSidebar = document.querySelector('.header__menu');
    function setActionWhenClickingOnOverlayDropdown(target) {
        target.onclick = function () {
            if (window.innerWidth < 768) {
                searchIcon.classList.remove('active');
            }
            target.classList.remove('active');
            closeSearchIcon.classList.remove('active');
            overlayDropdown.classList.remove('active');
            headerSearch.classList.remove('active');
            absoluteMenuLeft.classList.remove('active');
            suggestionSearchDropdown.innerHTML = '';
            suggestionSearchDropdown.classList.remove('active');
            if (menuSidebar.classList.contains('active')) {
                menuSidebar.classList.remove('active');
            }
        };
    }
    setActionWhenClickingOnOverlayDropdown(closeSearchIcon);
    setActionWhenClickingOnOverlayDropdown(overlayDropdown);
    function renderBagSearchResultToHtml(bagData) {
        var html = "\n                    <div xmlns:th=\"http://www.thymeleaf.org/\" class=\"search-results\">\n                            <ol id=\"search-suggestions\" class=\"\n                            search-results__list search-results__container search-results__container--autocomplete\n                            \">\n                                <li class=\"universal-item\">\n                                    <a href=\"/products/product/".concat(bagData['bagCategoryId'], "\" class=\"universal-item__link\">\n                                        <span class=\"universal-item__text\">\n                                            <div class=\"universal-item__title with-autocomplete-icon\">\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" style=\"fill: rgba(0, 0, 0, 1);\"\n                                                class=\"svg-icon universal-item__icon\"\n                                                >\n                                                    <path d=\"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z\"></path>\n                                                </svg>\n                                               <p class=\"universal-item__value\">\n                                                   ").concat(bagData['name'], "\n                                                </p>\n                                            </div>\n                                        </span>\n                                    </a>\n                                </li>\n                            </ol>\n                        </div>\n        ");
        return html;
    }
    function getBagResultWithAPI(innerHTMLTarget, keyword) {
        innerHTMLTarget.innerHTML = "";
        fetch("http://localhost:8080/api/bags/search/".concat(keyword))
            .then(function (response) { return response.json(); })
            .then(function (data) {
            console.log(data[0]);
            for (var i = 0; i < 3; ++i) {
                innerHTMLTarget.innerHTML += renderBagSearchResultToHtml(data[i]);
            }
        });
    }
    ;
    (function () {
        searchFieldInput.onfocus = function () {
            if (window.innerWidth < 768) {
                searchIcon.classList.add('active');
                closeSearchIcon.classList.add('active');
            }
            headerSearch.classList.add('active');
            overlayDropdown.classList.add('active');
        };
        searchFieldInput.oninput = function () {
            var searchKeyWord = searchFieldInput.value;
            if (searchKeyWord == '') {
                searchBoxContainsClearAndSearchBtn.classList.remove('active');
                searchFieldInput.classList.remove('active');
                suggestionSearchDropdown.classList.remove('active');
                suggestionSearchDropdown.innerHTML = '';
                if (window.innerWidth > 768) {
                    searchIcon.classList.remove('active');
                }
            }
            else {
                searchBoxContainsClearAndSearchBtn.classList.add('active');
                getBagResultWithAPI(suggestionSearchDropdown, searchKeyWord);
                suggestionSearchDropdown.classList.add('active');
                if (window.innerWidth > 768) {
                    searchIcon.classList.add('active');
                    searchFieldInput.classList.add('active');
                }
            }
        };
    })();
    (function () {
        var indexFocus = -1;
        searchFieldInput.addEventListener('keydown', function (e) {
            var key = e.key;
            var universalItemLink = document.getElementsByClassName('universal-item__link');
            var universalItemValue = document.getElementsByClassName('universal-item__value');
            var maxLengthOfUniversalItemLink = universalItemLink.length;
            if (key == 'ArrowDown' || key == 'PageDown') {
                if (indexFocus === -1) {
                    universalItemLink[++indexFocus].classList.add('active');
                }
                else if (indexFocus > -1 && indexFocus < maxLengthOfUniversalItemLink - 1) {
                    universalItemLink[indexFocus].classList.remove('active');
                    universalItemLink[++indexFocus].classList.add('active');
                }
                else if (indexFocus === maxLengthOfUniversalItemLink - 1) {
                    universalItemLink[indexFocus].classList.remove('active');
                    indexFocus = 0;
                    universalItemLink[indexFocus].classList.add('active');
                }
                e.preventDefault();
                searchFieldInput.value = universalItemValue[indexFocus].textContent.trim();
            }
            else if (key == 'ArrowUp' || key == 'PageUp') {
                if (indexFocus === -1) {
                    indexFocus = maxLengthOfUniversalItemLink - 1;
                    universalItemLink[indexFocus].classList.add('active');
                }
                else if (indexFocus === 0) {
                    indexFocus = maxLengthOfUniversalItemLink - 1;
                    universalItemLink[indexFocus].classList.add('active');
                    universalItemLink[0].classList.remove('active');
                }
                else if (indexFocus >= 0) {
                    universalItemLink[indexFocus].classList.remove('active');
                    universalItemLink[--indexFocus].classList.add('active');
                }
                e.preventDefault();
                searchFieldInput.value = universalItemValue[indexFocus].textContent.trim();
            }
        });
    })();
    (function () {
        var clearSearchInput = document.getElementById('clear-input');
        clearSearchInput.onclick = function () {
            searchFieldInput.value = '';
            searchFieldInput.focus();
            searchFieldInput.classList.remove('active');
            searchBoxContainsClearAndSearchBtn.classList.remove('active');
            suggestionSearchDropdown.classList.remove('active');
            suggestionSearchDropdown.innerHTML = '';
            if (window.innerWidth > 768) {
                searchIcon.classList.remove('active');
            }
        };
    })();
    (function () {
        var hamburger = document.querySelector('.header__hamburger');
        var closeMenuSidebar = document.querySelector('.header__menu-close');
        hamburger.onclick = function () {
            menuSidebar.classList.toggle('active');
        };
        closeMenuSidebar.onclick = function () {
            menuSidebar.classList.toggle('active');
            overlayDropdown.classList.remove('active');
        };
    })();
    (function () {
        var productsLink = document.querySelector('.link-products');
        var prdFilterLinkBtn = document.querySelector('.show-prdFilter-link');
        var prdFilters = document.querySelector('.prdFilter-nav');
        var closePrdFilters = document.querySelector('.prdFilter-backBtn');
        prdFilterLinkBtn.onclick = function (e) {
            e.preventDefault();
            prdFilters.classList.toggle('active');
        };
        closePrdFilters.onclick = function () {
            prdFilters.classList.toggle('active');
        };
        productsLink.onclick = function (e) {
            e.preventDefault();
            menuSidebar.classList.toggle('active');
            overlayDropdown.classList.toggle('active');
            if (!prdFilters.classList.contains('active')) {
                prdFilters.classList.add('active');
            }
        };
    })();
})();
