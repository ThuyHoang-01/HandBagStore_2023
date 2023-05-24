function setMinHeightForLeftAndRightComponents(): void {
	const registerLeftComponent: HTMLElement = document.querySelector('.register__left')
	const registerRightComponent: HTMLElement = document.querySelector('.register__right')

	let innerWidth: number = window.innerWidth

	if (innerWidth >= 768) {
		let avaiHeight = window.outerHeight

		registerLeftComponent.style.minHeight = avaiHeight + 'px'
		registerRightComponent.style.minHeight = avaiHeight + 'px'
	}
	else {
		registerLeftComponent.style.minHeight = 'auto'
		registerRightComponent.style.minHeight = 'auto'
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
	const firstNameInput = document.querySelector('#firstName') as HTMLInputElement
	const lastNameInput = document.querySelector('#lastName') as HTMLInputElement
	const emailInput = document.querySelector('#emailInput') as HTMLInputElement
	const passwordInput = document.querySelector('#passwordInput') as HTMLInputElement

	firstNameInput.addEventListener('blur', () => {
		validateFirstName(firstNameInput.value.trim())
	})

	lastNameInput.addEventListener('blur', () => {
		validateLastName(lastNameInput.value.trim())
	})

	emailInput.addEventListener('blur', () => {
		validateUserName(emailInput.value.trim())
	})

	passwordInput.addEventListener('blur', () => {
		validatePassword(passwordInput.value.trim())
	})

	form.addEventListener('submit', (e) => {
		if (
			!validateFirstName(firstNameInput.value.trim()) || !validateLastName(lastNameInput.value.trim()) ||
			!validatePassword(passwordInput.value.trim()) || !validateUserName(emailInput.value.trim())
		)
			e.preventDefault()
	})

	function validateFirstName(firstName: String) {
		firstNameInput.parentElement.classList.remove('error')
		firstNameInput.nextElementSibling.textContent = ''

		if (firstName === '') {
			firstNameInput.parentElement.classList.add('error')
			firstNameInput.nextElementSibling.textContent = 'Họ  không được để trống!'
			return false
		}

		return true
	}

	function validateLastName(lastName: String) {
		lastNameInput.parentElement.classList.remove('error')
		lastNameInput.nextElementSibling.textContent = ''

		if (lastName === '') {
			lastNameInput.parentElement.classList.add('error')
			lastNameInput.nextElementSibling.textContent = 'Tên không được để trống!'
			return false
		}

		return true
	}

	function validateUserName(userName: String) {
		emailInput.parentElement.classList.remove('error')
		emailInput.nextElementSibling.textContent = ''

		if (userName === '') {
			emailInput.parentElement.classList.add('error')
			emailInput.nextElementSibling.textContent = 'Tên đăng nhập không được trống!'
			return false
		}
			
		return true
	}

	function validatePassword(password: String) {
		passwordInput.parentElement.classList.remove('error')
		passwordInput.nextElementSibling.textContent = ''

		if (password === '') {
			passwordInput.parentElement.classList.add('error')
			passwordInput.nextElementSibling.textContent = 'Mật khẩu không được để trống!'
			return false
		}

		if (password.length < 6) {
			passwordInput.parentElement.classList.add('error')
			passwordInput.nextElementSibling.textContent = 'Mật khẩu phải có ít nhất  6 ký tự!'
			return false
		}

		return true
	}
})();