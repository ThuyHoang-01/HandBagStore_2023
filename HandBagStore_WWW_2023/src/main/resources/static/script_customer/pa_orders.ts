;(function(){
    const orderViewOptionTitle = document.querySelector('.order-viewOptions-title') as HTMLDivElement
    const orderViewOptions = document.querySelector('.order-viewOptions') as HTMLDivElement
    const orderViewOptionChevronIcon = document.querySelector('.order-viewOptions-chevron') as SVGElement

    orderViewOptionTitle.onclick = function(e){
        orderViewOptions.classList.toggle('active')
        orderViewOptionChevronIcon.classList.toggle('active')
    }

    window.addEventListener('click', function(e: Event){
        if (e.target != orderViewOptionTitle && e.target != orderViewOptions){
            orderViewOptions.classList.remove('active')
            orderViewOptionChevronIcon.classList.remove('active')
        }
    })
})()