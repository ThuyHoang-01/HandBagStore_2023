; (function() {
	function renderCartEmpty(): void {
		const cartWrapper = document.querySelector('.cart-wrapper') as HTMLDivElement

		cartWrapper.innerHTML = `
		    <div class="cart-empty">
		        <div class="cart-empty-top">
		            <h1 class="cart-empty-title">
		                Giỏ hàng của bạn hiện đang trống
		            </h1>
		            <h2 class="cart-empty-suggestion">
		                Hãy đăng nhập để xem giỏ hàng của bạn. Hoặc tiếp tục mua sắm thôi nào!
		            </h2>
		        </div>
		        <div class="cart-empty-bottom">
		            <a href="login.html" class="cart-empty-bottom-button cart-empty-login">
		                Đăng nhập
		            </a>
		            <a href="index.html" class="cart-empty-bottom-button cart-empty-goShopping">
		                Tiếp tục mua sắm
		            </a>
		        </div>
		    </div>`
	}

	const btnMinus = document.querySelectorAll('.quantity-minus')
	const btnPlus = document.querySelectorAll('.quantity-add')
	const btnDelete = document.querySelectorAll('.item-deleteBtn')

	btnPlus.forEach(btn => {
		btn.addEventListener('click', (e) => {

			let bagId = btn.parentElement.parentElement.parentElement.firstElementChild as HTMLInputElement
			let userId = btn.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling as HTMLInputElement
			let orderQuantity = btn.previousElementSibling as HTMLSpanElement

			let quantity = parseInt(orderQuantity.innerText) + 1

			fetch(
				`http://localhost:8080/api_cart/update?bagID=${bagId.value}&userID=${userId.value}&quantity=${quantity}`, {
				method: 'PUT'
			})
				.then(resp => resp.text())
				.then(data => {
					if (data === 'success') location.reload()
				})
		})
	})

	btnMinus.forEach(btn => {
		btn.addEventListener('click', (e) => {

			let bagId = btn.parentElement.parentElement.parentElement.firstElementChild as HTMLInputElement
			let userId = btn.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling as HTMLInputElement
			let orderQuantity = btn.nextElementSibling as HTMLSpanElement

			let quantity = parseInt(orderQuantity.innerText)

			if (quantity === 1) return

			quantity -= 1

			fetch(
				`http://localhost:8080/api_cart/update?bagID=${bagId.value}&userID=${userId.value}&quantity=${quantity}`, {
				method: 'PUT'
			})
				.then(resp => resp.text())
				.then(data => {
					if (data === 'success') location.reload()
				})
		})
	})

	btnDelete.forEach(btn => {
		btn.addEventListener('click', (e) => {
			let bagId = btn.parentElement.parentElement.firstElementChild as HTMLInputElement
			let userId = btn.parentElement.parentElement.firstElementChild.nextElementSibling as HTMLInputElement

			fetch(
				`http://localhost:8080/api_cart/delete?bagID=${bagId.value}&userID=${userId.value}`, {
				method: 'DELETE'
			})
				.then(resp => resp.text())
				.then(data => {
					if (data === 'success') location.reload()
				})
		})
	})

})()