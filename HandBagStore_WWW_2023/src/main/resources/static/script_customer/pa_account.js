const avatarInput = document.querySelector('#changeAvatar')
const userAva = document.querySelector('#userAva')
const reader = new FileReader()

avatarInput.addEventListener('change', () => {
	
	let files = avatarInput.files[0];
	
	if (files) {
		
		let fileReader = new FileReader();
		
		fileReader.readAsDataURL(files);
		fileReader.addEventListener("load", function() {
			userAva.src =  this.result
		});
	}
})