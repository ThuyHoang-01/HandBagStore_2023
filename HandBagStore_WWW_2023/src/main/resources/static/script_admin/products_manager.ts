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

;(function(){
    const addCateBtn = document.querySelector('.add-category') as HTMLButtonElement
    const overlay = document.querySelector('.overlay') as HTMLDivElement
    const categoryContainer = document.querySelector('.category-container') as HTMLDivElement
    const closeCategoryBtn = document.querySelector('.close-category-container') as HTMLButtonElement

    addCateBtn.onclick = function(){
        overlay.classList.add('active')
        categoryContainer.classList.add('active')
    }

    overlay.onclick = function(){
        overlay.classList.remove('active')
        categoryContainer.classList.remove('active')
    }

    closeCategoryBtn.onclick = function(){
        overlay.classList.remove('active')
        categoryContainer.classList.remove('active')
    }
})()

;;(function(){
    const prdCoverPhotoContainer = document.getElementById('prdCoverPhoto') as HTMLImageElement
    const chooseCoverPhotoInp = document.getElementById('choosePrdCoverPhoto') as HTMLInputElement


    chooseCoverPhotoInp.onchange = function(){
        let file = chooseCoverPhotoInp.files[0]

        if (file){
            const reader = new FileReader()

            reader.readAsDataURL(file)

            reader.onload = function(){
                prdCoverPhotoContainer.src = this.result + ''
            }
        }
    }
})()

;(function(){
    const btnAddNewProduct = document.querySelector('.add-prd-btn') as HTMLButtonElement
    const prdContainer = document.querySelector('.prd-container') as HTMLDivElement

    btnAddNewProduct.onclick = function(){
        prdContainer.innerHTML += `
        <div class="prd">
                            <div class="product-delete-container">
                                <button class="product-delete-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                                    </svg>
                                    <span class="product-delete-title">Xoá sản phẩm này</span>
                                </button>
                            </div>
                            <div class="prd-info-wrapper">
                                    <div class="add-comp add-comp-prd comp-color">
                                        <span class="add-comp-title add-comp-color-title">Màu sắc</span>
                                        <input type="text" placeholder="VD: Trắng ngọc trai" class="add-comp-input add-comp-color-input" name="color" id="txtColor">
                                        <span class="add-comp-notify add-comp-color-notify text-red-500" id="tbColor">(*)</span>
                                    </div>
                                    <div class="add-comp add-comp-prd comp-quantity">
                                        <span class="add-comp-title add-comp-quantity-title">Số lượng</span>
                                        <input type="text" placeholder="VD: 20" class="add-comp-input add-comp-quantity-input" name="quantity" id="txtQty">
                                        <span class="add-comp-notify add-comp-quantity-notify text-red-500" id="tbQty">(*)</span>
                                    </div>
                                    <div class="add-comp add-comp-prd comp-price">
                                        <span class="add-comp-title add-comp-price-title">Giá niêm yết</span>
                                        <input type="text" placeholder="VD: 3000000" class="add-comp-input add-comp-price-input" name="price" id="txtPrice">
                                        <span class="add-comp-notify add-comp-price-notify text-red-500" id="tbPrice">(*)</span>
                                    </div>
                                </div>
                                <div class="prd-images-container">
                                    <div class="prd-images-header">
                                        <span>Các ảnh của sản phẩm</span>
                                        <input type="file" multiple class="prd-image-choose" name="listImage">
                                    </div>
                                    <div class="prd-images-wrapper">
                                            
                                    </div>
                                </div>
                            </div>
        `

        ;(function(){
            const deletePrdBtnList = document.getElementsByClassName('product-delete-btn') as HTMLCollection

            for (let i = 0; i < deletePrdBtnList.length; ++i){
                let tmpBtn = deletePrdBtnList[i] as HTMLButtonElement

                tmpBtn.onclick = function(){
                    const prdList = document.getElementsByClassName('prd') as HTMLCollection
                    prdList[i].remove()
                }
            }
        })()

        ;(function(){
            const btnAddImageForPrdInpList = document.getElementsByClassName('prd-image-choose') as HTMLCollection
            const prdImagesWrapperList = document.getElementsByClassName('prd-images-wrapper') as HTMLCollection

            for (let i = 0; i < btnAddImageForPrdInpList.length; ++i){
                let tmpAddImgBtn = btnAddImageForPrdInpList[i] as HTMLInputElement

                tmpAddImgBtn.onchange = function(){
                    let imgFileList = tmpAddImgBtn.files

                    if (imgFileList.length !== 0){
                        for (let j = 0; j < imgFileList.length; ++j){
                            let tmpReader = new FileReader()
                            tmpReader.readAsDataURL(imgFileList[j])

                            tmpReader.onload = function(){
                                let imgSrc = this.result + ''

                                prdImagesWrapperList[i].innerHTML += `
                                    <figure class="prd-image-frame">
                                        <img src="${imgSrc}" alt="" class="prd-image">
                                    </figure>
                                `
                            }
                        }
                    }
                }
            }
        })()
    }
})()


; (function() {
	const orderSearchInput = document.querySelector('.order-search-input') as HTMLInputElement
	const searchOrderSuggesstionContainer = document.querySelector('.search-order-suggesstion-container') as HTMLDivElement

	orderSearchInput.addEventListener('input', function() {

		searchOrderSuggesstionContainer.classList.remove('active')
		searchOrderSuggesstionContainer.innerHTML = ''

		let keyword = orderSearchInput.value

		if (keyword === '') {
			searchOrderSuggesstionContainer.classList.remove('active')
			searchOrderSuggesstionContainer.innerHTML = ''
			return
		}

		fetch(`http://localhost:8080/api/bags/search/keyword?keyword=${keyword}`)
			.then(response => response.json())
			.catch(e => console.log(e.get))
			.then(data => {

				if (data) {
					searchOrderSuggesstionContainer.classList.add('active')

					for (let i = 0; i < data.length; ++i) {

						let bagCate = JSON.parse(data[i])

						searchOrderSuggesstionContainer.innerHTML +=
                            `<a href="" class="product-search-suggesstion">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);"
                                class="">
                                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                                </svg>
                                <span class="search-product-cateId">${bagCate['bagCateID']}</span>
                                <div class="search-product-other">
                                    <span class="search-product-name">${bagCate['name']}</span>
                                    <span class="search-product-brand">${bagCate['brand']}</span>
                                </div>
</div>
						    </a>`
					}
				}
			})
	})
})()