;(function(){
    const menu = document.querySelector('.menu') as HTMLDivElement
    const userAvatar = document.querySelector('.avatar') as HTMLImageElement

    userAvatar.onclick = function(){
        menu.classList.toggle('active')
    }

    window.addEventListener('click', function(e: Event){
        if (e.target != userAvatar && e.target != menu){
            menu.classList.remove('active')
        }
    })
})()