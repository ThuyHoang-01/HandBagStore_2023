function controlNavigationBtnOnPrdFiltersList(btnMoveToFullLeft, btnMoveToFullRight, productsFiltersList) {
    btnMoveToFullLeft.addEventListener('focus', function () {
        productsFiltersList.scrollLeft = 0;
        btnMoveToFullLeft.classList.remove('active');
        if (!btnMoveToFullRight.classList.contains('active')) {
            btnMoveToFullRight.classList.add('active');
        }
    });
    btnMoveToFullRight.addEventListener('focus', function () {
        var overlengthOfProductsFiltersList = productsFiltersList.scrollWidth - productsFiltersList.clientWidth;
        productsFiltersList.scrollLeft = overlengthOfProductsFiltersList;
        btnMoveToFullRight.classList.remove('active');
        if (!btnMoveToFullLeft.classList.contains('active')) {
            btnMoveToFullLeft.classList.add('active');
        }
    });
    productsFiltersList.addEventListener('scroll', function () {
        var overlengthOfProductsFiltersList = productsFiltersList.scrollWidth - productsFiltersList.clientWidth;
        var scrolledLeft = productsFiltersList.scrollLeft;
        if (scrolledLeft === 0) {
            if (!btnMoveToFullRight.classList.contains('active')) {
                btnMoveToFullRight.classList.add('active');
            }
            if (btnMoveToFullLeft.classList.contains('active')) {
                btnMoveToFullLeft.classList.remove('active');
            }
        }
        else if (scrolledLeft === overlengthOfProductsFiltersList) {
            if (btnMoveToFullRight.classList.contains('active')) {
                btnMoveToFullRight.classList.remove('active');
            }
            if (!btnMoveToFullLeft.classList.contains('active')) {
                btnMoveToFullLeft.classList.add('active');
            }
        }
        else {
            if (!btnMoveToFullLeft.classList.contains('active')) {
                btnMoveToFullLeft.classList.add('active');
            }
            if (!btnMoveToFullRight.classList.contains('active')) {
                btnMoveToFullRight.classList.add('active');
            }
        }
    });
}
function controlClickOnOptionsList(e, filterBtn, optionsListWrapper, optionsList, inputList) {
    var clickTartget = e.target;
    var optionsNum = optionsList.length;
    var count = 0;
    for (var i = 0; i < optionsNum; ++i) {
        if (clickTartget != optionsList[i] && clickTartget != inputList[i])
            count++;
    }
    if (count === optionsNum && clickTartget != filterBtn && clickTartget != optionsListWrapper) {
        filterBtn.classList.remove('active');
        optionsListWrapper.classList.remove('active');
    }
}
;
(function () {
    var btnMoveToFullLeft = document.querySelector('.filters-moveToLeft');
    var btnMoveToFullRight = document.querySelector('.filters-moveToRight');
    var productsFiltersList = document.querySelector('.products__filters-list');
    if (screen.width < 510) {
        if (!btnMoveToFullRight.classList.contains('active')) {
            btnMoveToFullRight.classList.add('active');
        }
        controlNavigationBtnOnPrdFiltersList(btnMoveToFullLeft, btnMoveToFullRight, productsFiltersList);
    }
})();
(function () {
    var btnMoveToFullLeft = document.querySelector('.filters-moveToLeft');
    var btnMoveToFullRight = document.querySelector('.filters-moveToRight');
    var productsFiltersList = document.querySelector('.products__filters-list');
    window.addEventListener('resize', function () {
        if (this.window.innerWidth < 510) {
            controlNavigationBtnOnPrdFiltersList(btnMoveToFullLeft, btnMoveToFullRight, productsFiltersList);
        }
        else {
            if (btnMoveToFullLeft.classList.contains('active')) {
                btnMoveToFullLeft.classList.remove('active');
            }
            if (btnMoveToFullRight.classList.contains('active')) {
                btnMoveToFullRight.classList.remove('active');
            }
        }
    });
})();
function specifyInputFilterTypeAndValue(input) {
    var filterType = '';
    if (input.type == 'checkbox') {
        var inputName = input.name;
        if (inputName.indexOf('brand') !== -1) {
            filterType = 'brand';
        }
        else if (inputName.indexOf('color') !== -1) {
            filterType = 'color';
        }
        else if (inputName.indexOf('price') !== -1) {
            filterType = 'price';
        }
    }
    return [filterType, input.value];
}
function addClearAllSelectedFiltersBtn(selectedFilterWrapper) {
    selectedFilterWrapper.innerHTML += "\n        <button class=\"selected-filter-clearAll\" title=\"Click \u0111\u1EC3 xo\u00E1 t\u1EA5t c\u1EA3 c\u00E1c b\u1ED9 l\u1ECDc\" onclick=\"document.querySelector('.products__selected-wrapper').innerHTML = ''\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" style=\"fill: rgba(0, 0, 0, 1);\" class=\"svg-icon\">\n                <path d=\"M21.842 6.218a1.977 1.977 0 0 0-.424-.628A1.99 1.99 0 0 0 20 5H8c-.297 0-.578.132-.769.359l-5 6c-.309.371-.309.91 0 1.281l5 6c.191.228.472.36.769.36h12a1.977 1.977 0 0 0 1.41-.582A1.99 1.99 0 0 0 22 17V7c0-.266-.052-.525-.158-.782zm-4.135 8.075-1.414 1.414L14 13.414l-2.293 2.293-1.414-1.414L12.586 12l-2.293-2.293 1.414-1.414L14 10.586l2.293-2.293 1.414 1.414L15.414 12l2.293 2.293z\"></path>\n            </svg>\n            Xo\u00E1 h\u1EBFt b\u1ED9 l\u1ECDc\n        </button>\n    ";
    var clearAllSelectedFiltersBtn = document.querySelector('.selected-filter-clearAll');
    clearAllSelectedFiltersBtn.onclick = function () {
        selectedFilterWrapper.innerHTML = '';
        var filtersList = document.querySelectorAll('.products__option-checkbox');
        for (var i = 0; i < filtersList.length; ++i) {
            if (filtersList[i].checked) {
                filtersList[i].checked = false;
            }
        }
    };
}
function checkDuplicateSelectedFilter(input) {
    var selectedFilters = document.querySelectorAll('.selected-filter');
    for (var i = 0; i < selectedFilters.length; ++i) {
        if (selectedFilters[i].value == input.value) {
            return true;
        }
    }
    return false;
}
function refreshStatusOfClearAllFiltersBtn() {
    var clearAllFiltersBtn = document.querySelector('.selected-filter-clearAll');
    var filtersWrapper = document.querySelector('.products__selected-wrapper');
    if (filtersWrapper.childElementCount == 2) {
        clearAllFiltersBtn.remove();
    }
}
function addActionForSelectedFilterBtn(selectedFilter) {
    var inputFiltersList = document.querySelectorAll('.products__option-checkbox');
    var tmpInput;
    for (var i = 0; i < inputFiltersList.length; ++i) {
        tmpInput = inputFiltersList[i];
        if (tmpInput.value == selectedFilter.value) {
            tmpInput.checked = false;
            selectedFilter.remove();
            refreshStatusOfClearAllFiltersBtn();
        }
    }
}
function pushToSelectedFilterWrapperNewFilter(selectedFilterWrapper, input) {
    if (input.checked) {
        if (selectedFilterWrapper.childElementCount > 1) {
            selectedFilterWrapper.removeChild(selectedFilterWrapper.children[selectedFilterWrapper.childElementCount - 1]);
        }
        if (input.type == 'checkbox' && !checkDuplicateSelectedFilter(input)) {
            var inputType = specifyInputFilterTypeAndValue(input);
            selectedFilterWrapper.innerHTML += "\n                <button class=\"selected-filter selected-filter-".concat(inputType[0], " selected-").concat(inputType[0], "-").concat(inputType[1], "\" title=\"Click \u0111\u1EC3 xo\u00E1 b\u1ED9 l\u1ECDc n\u00E0y\" value=\"").concat(input.value, "\" onclick=\"addActionForSelectedFilterBtn(this)\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" style=\"fill: rgba(0, 0, 0, 1);\"\n                    class=\"svg-icon\">\n                        <path d=\"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z\"></path>\n                    </svg>\n                    ").concat(input.value, "\n                </button>\n            ");
            console.log(selectedFilterWrapper.childElementCount);
        }
        if (selectedFilterWrapper.childElementCount > 1) {
            addClearAllSelectedFiltersBtn(selectedFilterWrapper);
        }
    }
    else {
        var selectedFilters = selectedFilterWrapper.querySelectorAll('.selected-filter');
        for (var i = 0; i < selectedFilters.length; ++i) {
            if (selectedFilters[i].value == input.value) {
                selectedFilters[i].remove();
                refreshStatusOfClearAllFiltersBtn();
            }
        }
    }
}
function checkOnInputAfterClickedOnOption(selectedFilterWrapper, options, inputList) {
    var tmpInput;
    var _loop_1 = function (i) {
        options[i].onclick = function () {
            tmpInput = inputList[i];
            tmpInput.checked = tmpInput.checked ? false : true;
            pushToSelectedFilterWrapperNewFilter(selectedFilterWrapper, tmpInput);
        };
    };
    for (var i = 0; i < options.length; ++i) {
        _loop_1(i);
    }
}
function processOnFilterBtnAndOptionsList(filterBtn, optionsListWrapper, optionsList, optionsInputList) {
    filterBtn.onclick = function () {
        filterBtn.classList.toggle('active');
        optionsListWrapper.classList.toggle('active');
        var selectedFilterWrapper = document.querySelector('.products__selected-wrapper');
        checkOnInputAfterClickedOnOption(selectedFilterWrapper, optionsList, optionsInputList);
        if (window.innerWidth > 510) {
            var xAxisCoordinateOfFilterBtn = filterBtn.offsetLeft;
            optionsListWrapper.style.top = '0px';
            optionsListWrapper.style.left = xAxisCoordinateOfFilterBtn + 'px';
        }
        else {
            var overlayDropDown = document.querySelector('.dropdown__overlay');
            overlayDropDown.classList.toggle('active');
            optionsListWrapper.style.top = (optionsListWrapper.offsetHeight * -1) + 'px';
            optionsListWrapper.style.left = '0px';
        }
    };
    window.addEventListener('click', function (e) {
        controlClickOnOptionsList(e, filterBtn, optionsListWrapper, optionsList, optionsInputList);
    });
}
;
(function () {
    var filterBtnList = document.getElementsByClassName('filter-btn');
    var optionsListWrapper = document.getElementsByClassName('products-options');
    var optionsListType = [
        document.getElementsByClassName('products__option-sort'),
        document.getElementsByClassName('products__option-brand'),
        document.getElementsByClassName('products__option-color'),
        document.getElementsByClassName('products__option-price')
    ];
    var optionsInputList = [
        document.getElementsByClassName("products__option__sort-check"),
        document.getElementsByClassName("products__option__brand-check"),
        document.getElementsByClassName("products__option__color-check"),
        document.getElementsByClassName("products__option__price-check")
    ];
    for (var i = 0; i < filterBtnList.length; ++i) {
        processOnFilterBtnAndOptionsList(filterBtnList[i], optionsListWrapper[i], optionsListType[i], optionsInputList[i]);
    }
})();
