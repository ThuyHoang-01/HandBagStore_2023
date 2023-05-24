function toggleMenuOnVerticall(
	titleContainer,
	optionsWrapper,
	icon
): void {
	titleContainer.onclick = function() {
		optionsWrapper.classList.toggle('active')
		icon.classList.toggle('active')
	}

	window.addEventListener('click', function(e: Event) {
		let target: object = e.target

		if (target != titleContainer && target != optionsWrapper) {
			optionsWrapper.classList.remove('active')
			icon.classList.remove('active')
		}
	})
}

; (function() {
	toggleMenuOnVerticall(
		document.querySelector('.admin-customer-viewOptions-title') as HTMLDivElement,
		document.querySelector('.admin-customer-viewOptions') as HTMLDivElement,
		document.querySelector('.admin-customer-viewOptions-icon') as SVGElement
	)
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

		fetch(`http://localhost:8080/api_customer_admin/search?keyword=${keyword}`)
			.then(response => response.json())
			.catch(e => console.log(e.get))
			.then(data => {

				if (data) {
					searchOrderSuggesstionContainer.classList.add('active')

					for (let i = 0; i < data.length; ++i) {

						let customer = JSON.parse(data[i])

						searchOrderSuggesstionContainer.innerHTML +=
							`<a href="" class="order-search-suggesstion">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);"
							class="">
								<path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
							</svg>
							<span class="search-order-cusPhone">${customer['cusID']}</span>
							<span class="search-order-orderDate">${customer['firstName']}</span>
							<span class="search-order-orderDate">${customer['lastName']}</span>
							<span class="search-order-orderDate">${customer['phone']}</span>
						</a>`
					}
				}
			})
	})
})()