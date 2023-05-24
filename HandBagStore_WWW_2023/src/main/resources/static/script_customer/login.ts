function setMinHeightForLeftAndRightComponents(): void {
	const loginLeftComponent: HTMLElement = document.querySelector('.login__left')
	const loginRightComponent: HTMLElement = document.querySelector('.login__right')

	let innerWidth: number = window.innerWidth

	if (innerWidth >= 768) {
		let avaiHeight = window.outerHeight

		loginLeftComponent.style.minHeight = avaiHeight + 'px'
		loginRightComponent.style.minHeight = avaiHeight + 'px'
	}
	else {
		loginLeftComponent.style.minHeight = 'auto'
		loginRightComponent.style.minHeight = 'auto'
	}
}

function setAnimationWhenFirstLoadingPage(): void {
	const loginComponent: HTMLElement = document.querySelector('.login')

	this.setTimeout(function() {
		loginComponent.classList.add('active')
	}, 200)
}

; (function() {
	window.addEventListener('load', function() {
		setMinHeightForLeftAndRightComponents()
		setAnimationWhenFirstLoadingPage()
	})

	window.addEventListener('resize', function() {
		setMinHeightForLeftAndRightComponents()
	})
})();

; (function() {

	const form = document.querySelector('.main-form') as HTMLFormElement
	const emailInput = document.querySelector('#emailInput') as HTMLInputElement
	const passwordInput = document.querySelector('#passwordInput') as HTMLInputElement
	const btnLogin = document.querySelector('#btnLogin') as HTMLButtonElement

	emailInput.addEventListener('blur', () => {
		if (emailInput.value.trim() === '') {
			emailInput.parentElement.classList.add('error')
			emailInput.nextElementSibling.textContent = 'Tên đăng nhập không được để trống!'
		} else {
			emailInput.parentElement.classList.remove('error')
			emailInput.nextElementSibling.textContent = ''
		}
	})

	passwordInput.addEventListener('blur', () => {
		if (passwordInput.value.trim() === '') {
			passwordInput.parentElement.classList.add('error')
			passwordInput.nextElementSibling.textContent = 'Mật  khẩu không được để trống!'
		} else {
			passwordInput.parentElement.classList.remove('error')
			passwordInput.nextElementSibling.textContent = ''
		}
	})

	form.addEventListener('submit', (e) => {
		if (!validateUserInput(emailInput.value.trim(), passwordInput.value.trim()))
			e.preventDefault()
	})

	function validateUserInput(username: String, password: String) {
		if (username === '') {
			emailInput.focus()
			return false
		}

		if (password === '') {
			passwordInput.focus()
			return false
		}

		return true
	}
})();