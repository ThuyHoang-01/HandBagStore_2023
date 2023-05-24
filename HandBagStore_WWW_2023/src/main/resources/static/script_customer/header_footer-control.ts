;(function(){
    const headerSearch = document.querySelector('.header-search') as HTMLDivElement
    const overlayDropdown = document.querySelector('.dropdown__overlay') as HTMLDivElement
    const searchFieldInput = document.querySelector('.search-field__input') as HTMLInputElement
    const searchBoxContainsClearAndSearchBtn = document.querySelector('.search-box__button-wrapper') as HTMLSpanElement
    const searchIcon = document.querySelector('.search-field__search-icon') as SVGElement
    const suggestionSearchDropdown = document.querySelector('.dropdown') as HTMLDivElement
    const closeSearchIcon = document.querySelector('.search-box__button-wrapper-close-icon') as HTMLSpanElement
    const absoluteMenuLeft = document.querySelector('.prdFilter-nav') as HTMLDivElement
    const menuSidebar = document.querySelector('.header__menu')

    function setActionWhenClickingOnOverlayDropdown(target: any): void{
        target.onclick = function(){
            if (window.innerWidth < 768){
                searchIcon.classList.remove('active')
            }

            target.classList.remove('active')

            closeSearchIcon.classList.remove('active')
            overlayDropdown.classList.remove('active')
    
            headerSearch.classList.remove('active')
            absoluteMenuLeft.classList.remove('active')

            suggestionSearchDropdown.innerHTML = ''
            suggestionSearchDropdown.classList.remove('active')

            if (menuSidebar.classList.contains('active')){
                menuSidebar.classList.remove('active')
            }
        }
    }

    setActionWhenClickingOnOverlayDropdown(closeSearchIcon)
    setActionWhenClickingOnOverlayDropdown(overlayDropdown)

    function renderBagSearchResultToHtml(bagData: object): string{
        let html = `
                    <div xmlns:th="http://www.thymeleaf.org/" class="search-results">
                            <ol id="search-suggestions" class="
                            search-results__list search-results__container search-results__container--autocomplete
                            ">
                                <li class="universal-item">
                                    <a href="/products/product/${bagData['bagCategoryId']}" class="universal-item__link">
                                        <span class="universal-item__text">
                                            <div class="universal-item__title with-autocomplete-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);"
                                                class="svg-icon universal-item__icon"
                                                >
                                                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                                                </svg>
                                               <p class="universal-item__value">
                                                   ${bagData['name']}
                                                </p>
                                            </div>
                                        </span>
                                    </a>
                                </li>
                            </ol>
                        </div>
        `

        return html
    }

    function getBagResultWithAPI(innerHTMLTarget: HTMLDivElement, keyword: string): void{
        innerHTMLTarget.innerHTML = ``

        fetch(`http://localhost:8080/api/bags/search/${keyword}`)
            .then(response => response.json())
            .then(function (data){
                console.log(data[0])
                for (let i = 0; i < 3; ++i){
                    innerHTMLTarget.innerHTML +=  renderBagSearchResultToHtml(data[i])
                }
            })
    }

    ;(function(){
        searchFieldInput.onfocus = function(): void{
            if (window.innerWidth < 768){
                searchIcon.classList.add('active')
                closeSearchIcon.classList.add('active')
            }

            headerSearch.classList.add('active')
            overlayDropdown.classList.add('active')
        }

        searchFieldInput.oninput = function(): void{
            let searchKeyWord = searchFieldInput.value

            if (searchKeyWord == ''){
                searchBoxContainsClearAndSearchBtn.classList.remove('active')
                searchFieldInput.classList.remove('active')

                suggestionSearchDropdown.classList.remove('active')
                suggestionSearchDropdown.innerHTML = ''

                if (window.innerWidth > 768){
                    searchIcon.classList.remove('active')
                }
            }
            else{
                searchBoxContainsClearAndSearchBtn.classList.add('active')

                getBagResultWithAPI(suggestionSearchDropdown, searchKeyWord)
                suggestionSearchDropdown.classList.add('active')

                if (window.innerWidth > 768){
                    searchIcon.classList.add('active')
                    searchFieldInput.classList.add('active')
                }
            }
        }
    })()

    ;(function(){
        let indexFocus: number = -1

        searchFieldInput.addEventListener('keydown', function(e: KeyboardEvent){
            let key: string = e.key

            const universalItemLink = document.getElementsByClassName('universal-item__link') as HTMLCollection
            const universalItemValue = document.getElementsByClassName('universal-item__value') as HTMLCollection

            let maxLengthOfUniversalItemLink: number = universalItemLink.length

            if (key == 'ArrowDown' || key == 'PageDown'){
                if (indexFocus === -1){
                    universalItemLink[++indexFocus].classList.add('active')
                }
                else if (indexFocus > -1 && indexFocus < maxLengthOfUniversalItemLink - 1){
                    universalItemLink[indexFocus].classList.remove('active')
                    universalItemLink[++indexFocus].classList.add('active')
                }
                else if (indexFocus === maxLengthOfUniversalItemLink - 1){
                    universalItemLink[indexFocus].classList.remove('active')
    
                    indexFocus = 0
    
                    universalItemLink[indexFocus].classList.add('active')
                }

                e.preventDefault()
                searchFieldInput.value = universalItemValue[indexFocus].textContent.trim()
            }
            else if (key == 'ArrowUp' || key == 'PageUp'){
                if (indexFocus === -1){
                    indexFocus = maxLengthOfUniversalItemLink - 1
                    
                    universalItemLink[indexFocus].classList.add('active')
                }
                else if (indexFocus === 0){
                    indexFocus = maxLengthOfUniversalItemLink - 1
    
                    universalItemLink[indexFocus].classList.add('active')
                    universalItemLink[0].classList.remove('active')
                }
                else if (indexFocus >= 0){
                    universalItemLink[indexFocus].classList.remove('active')
                    universalItemLink[--indexFocus].classList.add('active')
                }
    
                e.preventDefault()
                searchFieldInput.value = universalItemValue[indexFocus].textContent.trim()
            }
        })
    })()

    ;(function(){
        const clearSearchInput = document.getElementById('clear-input') as HTMLButtonElement

        clearSearchInput.onclick = function(){
            searchFieldInput.value = ''
            searchFieldInput.focus()
            searchFieldInput.classList.remove('active')

            searchBoxContainsClearAndSearchBtn.classList.remove('active')

            suggestionSearchDropdown.classList.remove('active')
            suggestionSearchDropdown.innerHTML = ''

            if (window.innerWidth > 768){
                searchIcon.classList.remove('active')
            }
        }
    })()

    ;(function(){
        const hamburger = document.querySelector('.header__hamburger') as HTMLLIElement
        const closeMenuSidebar = document.querySelector('.header__menu-close') as HTMLDivElement

        hamburger.onclick = function(){
            menuSidebar.classList.toggle('active')
        }

        closeMenuSidebar.onclick = function(){
            menuSidebar.classList.toggle('active')

            overlayDropdown.classList.remove('active')
        }
    })()

    ;(function(){
        const productsLink = document.querySelector('.link-products') as HTMLLinkElement 
        const prdFilterLinkBtn = document.querySelector('.show-prdFilter-link') as HTMLLinkElement
        const prdFilters = document.querySelector('.prdFilter-nav') as HTMLDivElement
        const closePrdFilters = document.querySelector('.prdFilter-backBtn') as HTMLDivElement

        prdFilterLinkBtn.onclick = function(e: Event){
            e.preventDefault()

            prdFilters.classList.toggle('active')
        }

        closePrdFilters.onclick = function(){
            prdFilters.classList.toggle('active')
        }

        productsLink.onclick = function(e: Event){
            e.preventDefault()

            menuSidebar.classList.toggle('active')
            overlayDropdown.classList.toggle('active')

            if (!prdFilters.classList.contains('active')){
                prdFilters.classList.add('active')
            }
        }
    })()

})()