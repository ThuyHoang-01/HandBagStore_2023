function controlNavigationBtnOnPrdFiltersList(btnMoveToFullLeft: Element, btnMoveToFullRight: Element, productsFiltersList: Element): void{
    btnMoveToFullLeft.addEventListener('focus', function(){
        productsFiltersList.scrollLeft = 0

        btnMoveToFullLeft.classList.remove('active')

        if (!btnMoveToFullRight.classList.contains('active')){
            btnMoveToFullRight.classList.add('active')
        }
    })

    btnMoveToFullRight.addEventListener('focus', function(){
        let overlengthOfProductsFiltersList = productsFiltersList.scrollWidth - productsFiltersList.clientWidth

        productsFiltersList.scrollLeft = overlengthOfProductsFiltersList

        btnMoveToFullRight.classList.remove('active')

        if (!btnMoveToFullLeft.classList.contains('active')){
            btnMoveToFullLeft.classList.add('active')
        }
    })
    
    productsFiltersList.addEventListener('scroll', function(){
        let overlengthOfProductsFiltersList: number = productsFiltersList.scrollWidth - productsFiltersList.clientWidth

        let scrolledLeft: number = productsFiltersList.scrollLeft

        if (scrolledLeft === 0){
            if (!btnMoveToFullRight.classList.contains('active')){
                btnMoveToFullRight.classList.add('active')
            }

            if (btnMoveToFullLeft.classList.contains('active')){
                btnMoveToFullLeft.classList.remove('active')
            }
        }
        else if (scrolledLeft === overlengthOfProductsFiltersList){
            if (btnMoveToFullRight.classList.contains('active')){
                btnMoveToFullRight.classList.remove('active')
            }

            if (!btnMoveToFullLeft.classList.contains('active')){
                btnMoveToFullLeft.classList.add('active')
            }
        }
        else {
            if (!btnMoveToFullLeft.classList.contains('active')){
                btnMoveToFullLeft.classList.add('active')
            }

            if (!btnMoveToFullRight.classList.contains('active')){
                btnMoveToFullRight.classList.add('active')
            }
        }
    })
}

function controlClickOnOptionsList(e: Event, filterBtn: Element, optionsListWrapper: Element, optionsList: HTMLCollection, inputList: HTMLCollection): void{
    let clickTartget = e.target
    let optionsNum = optionsList.length

    let count = 0

    for (let i = 0; i < optionsNum; ++i){
        if (clickTartget != optionsList[i] && clickTartget != inputList[i])
            count++
    }

    if (count === optionsNum && clickTartget != filterBtn && clickTartget != optionsListWrapper){
        filterBtn.classList.remove('active')
        optionsListWrapper.classList.remove('active')
    }

}

;(function(){
    const btnMoveToFullLeft: HTMLElement = document.querySelector('.filters-moveToLeft')
    const btnMoveToFullRight: HTMLElement = document.querySelector('.filters-moveToRight')
    const productsFiltersList: HTMLElement = document.querySelector('.products__filters-list')

    if (screen.width < 510){
        if (!btnMoveToFullRight.classList.contains('active')){
            btnMoveToFullRight.classList.add('active')
        }

        controlNavigationBtnOnPrdFiltersList(btnMoveToFullLeft, btnMoveToFullRight, productsFiltersList)
    }
})()

;(function(){
    const btnMoveToFullLeft: HTMLElement = document.querySelector('.filters-moveToLeft')
    const btnMoveToFullRight: HTMLElement = document.querySelector('.filters-moveToRight')
    const productsFiltersList: HTMLElement = document.querySelector('.products__filters-list')

    window.addEventListener('resize', function(){
        if (this.window.innerWidth < 510){
            controlNavigationBtnOnPrdFiltersList(btnMoveToFullLeft, btnMoveToFullRight, productsFiltersList)
        }
        else{
            if (btnMoveToFullLeft.classList.contains('active')){
                btnMoveToFullLeft.classList.remove('active')
            }

            if (btnMoveToFullRight.classList.contains('active')){
                btnMoveToFullRight.classList.remove('active')
            }
        }
    })
})()

function specifyInputFilterTypeAndValue(input: HTMLInputElement): string[]{
    let filterType: string = ''

    if (input.type == 'checkbox'){
        let inputName: string = input.name

        if (inputName.indexOf('brand') !== -1){
            filterType = 'brand'
        }
        else if (inputName.indexOf('color') !== -1){
            filterType = 'color'
        }
        else if (inputName.indexOf('price') !== -1){
            filterType = 'price'
        }
    }

    return [filterType, input.value]
}

function addClearAllSelectedFiltersBtn(selectedFilterWrapper: HTMLDivElement): void{
    selectedFilterWrapper.innerHTML += `
        <button class="selected-filter-clearAll" title="Click để xoá tất cả các bộ lọc" onclick="document.querySelector('.products__selected-wrapper').innerHTML = ''">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);" class="svg-icon">
                <path d="M21.842 6.218a1.977 1.977 0 0 0-.424-.628A1.99 1.99 0 0 0 20 5H8c-.297 0-.578.132-.769.359l-5 6c-.309.371-.309.91 0 1.281l5 6c.191.228.472.36.769.36h12a1.977 1.977 0 0 0 1.41-.582A1.99 1.99 0 0 0 22 17V7c0-.266-.052-.525-.158-.782zm-4.135 8.075-1.414 1.414L14 13.414l-2.293 2.293-1.414-1.414L12.586 12l-2.293-2.293 1.414-1.414L14 10.586l2.293-2.293 1.414 1.414L15.414 12l2.293 2.293z"></path>
            </svg>
            Xoá hết bộ lọc
        </button>
    `

    const clearAllSelectedFiltersBtn = document.querySelector('.selected-filter-clearAll') as HTMLButtonElement
    
    clearAllSelectedFiltersBtn.onclick = function(){
        selectedFilterWrapper.innerHTML = ''

        const filtersList: NodeList = document.querySelectorAll('.products__option-checkbox')

        for (let i = 0; i < filtersList.length; ++i){
            if ((filtersList[i] as HTMLInputElement).checked){
                (filtersList[i] as HTMLInputElement).checked = false
            }
        }
    }
}

function checkDuplicateSelectedFilter(input: HTMLInputElement): boolean{
    const selectedFilters: NodeList = document.querySelectorAll('.selected-filter')

    for (let i = 0; i < selectedFilters.length; ++i){
        if ((selectedFilters[i] as HTMLButtonElement).value == input.value){
            return true
        }
    }

    return false
}

function refreshStatusOfClearAllFiltersBtn(): void{
    const clearAllFiltersBtn = document.querySelector('.selected-filter-clearAll') as HTMLButtonElement
    const filtersWrapper = document.querySelector('.products__selected-wrapper') as HTMLDivElement
    
    if (filtersWrapper.childElementCount == 2){
        clearAllFiltersBtn.remove()
    }
}

function addActionForSelectedFilterBtn(selectedFilter: HTMLButtonElement): void{
    const inputFiltersList: NodeList = document.querySelectorAll('.products__option-checkbox')
    let tmpInput: HTMLInputElement

    for (let i = 0; i < inputFiltersList.length; ++i){
        tmpInput = inputFiltersList[i] as HTMLInputElement

        if (tmpInput.value == selectedFilter.value){
            tmpInput.checked = false
            
            selectedFilter.remove()

            refreshStatusOfClearAllFiltersBtn()
        }
    }
}

function pushToSelectedFilterWrapperNewFilter(selectedFilterWrapper: HTMLDivElement, input: HTMLInputElement): void{
    if (input.checked){
        if (selectedFilterWrapper.childElementCount > 1){
            selectedFilterWrapper.removeChild(selectedFilterWrapper.children[selectedFilterWrapper.childElementCount - 1])
        }
    
        if (input.type == 'checkbox' && !checkDuplicateSelectedFilter(input)){
            let inputType: string[] = specifyInputFilterTypeAndValue(input)
    
            selectedFilterWrapper.innerHTML += `
                <button class="selected-filter selected-filter-${inputType[0]} selected-${inputType[0]}-${inputType[1]}" title="Click để xoá bộ lọc này" value="${input.value}" onclick="addActionForSelectedFilterBtn(this)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);"
                    class="svg-icon">
                        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                    </svg>
                    ${input.value}
                </button>
            `

            console.log(selectedFilterWrapper.childElementCount)
        }
    
        if (selectedFilterWrapper.childElementCount > 1){
            addClearAllSelectedFiltersBtn(selectedFilterWrapper)
        }
    }
    else{
        const selectedFilters = selectedFilterWrapper.querySelectorAll('.selected-filter')

        for (let i = 0; i < selectedFilters.length; ++i){
            if ((selectedFilters[i] as HTMLButtonElement).value == input.value){
                (selectedFilters[i] as HTMLButtonElement).remove()

                refreshStatusOfClearAllFiltersBtn()
            }
        }
    }
}

function checkOnInputAfterClickedOnOption(selectedFilterWrapper: HTMLDivElement, options: HTMLCollection, inputList: HTMLCollection): void{
    let tmpInput: HTMLInputElement

    for (let i = 0; i < options.length; ++i){
        (options[i] as HTMLElement).onclick = function(){
            tmpInput = inputList[i] as HTMLInputElement

            tmpInput.checked = tmpInput.checked ? false : true

            pushToSelectedFilterWrapperNewFilter(selectedFilterWrapper, tmpInput)
        }
    }
}


function processOnFilterBtnAndOptionsList(filterBtn: HTMLButtonElement, optionsListWrapper: HTMLDivElement, optionsList: HTMLCollection, optionsInputList: HTMLCollection): void{
    filterBtn.onclick = function(){
        filterBtn.classList.toggle('active')

        optionsListWrapper.classList.toggle('active')

        const selectedFilterWrapper: HTMLDivElement = document.querySelector('.products__selected-wrapper')
        checkOnInputAfterClickedOnOption(selectedFilterWrapper, optionsList, optionsInputList)

        if (window.innerWidth > 510){
            let xAxisCoordinateOfFilterBtn: number = filterBtn.offsetLeft

            optionsListWrapper.style.top = '0px'
            optionsListWrapper.style.left = xAxisCoordinateOfFilterBtn + 'px'
        }
        else{
            const overlayDropDown = document.querySelector('.dropdown__overlay')

            overlayDropDown.classList.toggle('active')

            optionsListWrapper.style.top = (optionsListWrapper.offsetHeight * -1) + 'px'
            optionsListWrapper.style.left = '0px'
        }
    }

    window.addEventListener('click', function(e){
        controlClickOnOptionsList(e, filterBtn, optionsListWrapper, optionsList, optionsInputList)
    })
}



;(function(){
    const filterBtnList = document.getElementsByClassName('filter-btn')
    const optionsListWrapper = document.getElementsByClassName('products-options')
    const optionsListType: HTMLCollection[] = [
        document.getElementsByClassName('products__option-sort'),
        document.getElementsByClassName('products__option-brand'),
        document.getElementsByClassName('products__option-color'),
        document.getElementsByClassName('products__option-price')
    ]
    const optionsInputList: HTMLCollection[] = [
        document.getElementsByClassName("products__option__sort-check"),
        document.getElementsByClassName("products__option__brand-check"),
        document.getElementsByClassName("products__option__color-check"),
        document.getElementsByClassName("products__option__price-check")
    ]

    for (let i = 0; i < filterBtnList.length; ++i){
        processOnFilterBtnAndOptionsList(filterBtnList[i] as HTMLButtonElement, optionsListWrapper[i] as HTMLDivElement, optionsListType[i] as HTMLCollection, optionsInputList[i] as HTMLCollection)
    }
})()
