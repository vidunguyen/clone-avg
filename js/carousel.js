const carousel = document.querySelectorAll('.carousel')
carousel.forEach(ele => {
    let dtype = ele.getAttribute('_type')
    let duration = ele.getAttribute('duration')
    const carouselItems = document.querySelectorAll(`.carousel[_type="${dtype}"] > .carousel-item`)
    let clientWidthCarouselItem = carouselItems[0].offsetWidth
    let currentIndex = 0
    let count = 0
    function handleCarouselBanner(i){
        carouselItems[currentIndex].style.transform = `translate3d(${clientWidthCarouselItem*(carouselItems.length)*i}px,0px,0px)`
        currentIndex++
    }
    let i = 1
    let run = setInterval(()=>{
        count++
        ele.style.transition ="transform 0.5s ease-in-out";
        ele.style.transform = `translate3d(${-clientWidthCarouselItem*(count)}px,0px,0px)`
        if(currentIndex == carouselItems.length ){
            i += 1
            currentIndex = 0
        }
        if(count>1){
            handleCarouselBanner(i)
        }
        
    },duration)
})

// const dtype = carousel.getAttribute("_type")

// const carouselItems = document.querySelectorAll(`.carousel[_type="${dtype}"] > .carousel-item`)

// let clientWidthCarouselItem = carouselItems[0].offsetWidth

// // let index = 0
// let currentIndex = 0
// // let count = 0
// let dem = 0
// function handleCarouselBanner(i){
//     carouselItems[currentIndex].style.transform = `translate3d(${clientWidthCarouselItem*(carouselItems.length)*i}px,0px,0px)`
//     currentIndex++
// }
// let i = 1
// setInterval(()=>{
//     dem++
//     carousel.style.transition ="transform 0.5s ease-in-out";
//     carousel.style.transform = `translate3d(${-clientWidthCarouselItem*(dem)}px,0px,0px)`
//     if(currentIndex == carouselItems.length ){
//         i += 1
//         console.log("lan thu: ", currentIndex)
//         currentIndex = 0
//     }
//     if(dem>1){
//         handleCarouselBanner(i)
//     }
    
// },1000)

// const carouselBanner = document.querySelector('.carousel[_type="banner"]')
// const prevIcon = document.querySelector('.prev-icon')
// const nextIcon = document.querySelector('.next-icon')

// const carouselItems = document.querySelectorAll('.carousel[_type="banner"] .carousel-item')
// let clientWidthCarouselItem = carouselItems[0].offsetWidth
// let count = 0
// let currentIndex = 0
// nextIcon.addEventListener('click', ()=>{
//     count++
//     carouselBanner.style.transition ="transform 0.5s ease-in-out";
//     carouselBanner.style.transform = `translate3d(${-clientWidthCarouselItem*(count)}px,0px,0px)`
//     carouselItems.forEach(ele => {
//         ele.style.transform = `translate3d(${clientWidthCarouselItem}px,0px,0px)`
//     })
    

//     console.log(clientWidthCarouselItem)
//     // clearInterval(run, 2000)
// })

