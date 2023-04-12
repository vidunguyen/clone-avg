const tv = [
    {
        id: "firstClone",
        src: "./img/htv3.jpg"
    },
    {
        id: "Clone",
        src: "./img/cna.jpg"
    },
    {
        id: "Clone",
        src: "./img/onsport.png"
    },
    {
        id: "Clone",
        src: "./img/Woman.png"
    },
    {
        id: "Clone",
        src: "./img/hbo.jpg"
    },
    {
        id: "Clone",
        src: "./img/BM1_Black_2021-1.png"
    },
    {
        id: "Clone",
        src: "./img/MusicBox_Black_2021.png"
    },
    {
        id: "Clone",
        src: "./img/vtv6.jpg"
    },
    {
        id: "Clone",
        src: "./img/vtc3.jpg"
    },
    {
        id: "Clone",
        src: "./img/BoxHits_2021-1.png"
    },
    {
        id: "Clone",
        src: "./img/vtv3.jpg"
    },
    {
        id: "lastClone",
        src: "./img/VTVcab15-MChannel.png"
    },
]



const tvList = document.querySelector('.tv__channel-list') // thẻ cha
// render dữ liệu ra màn hình
function handleTv(tv){
    return `<div class="tv__channel-item carousel-item">
                <img src="${tv.src}" alt="">
            </div>`
}
let tvItem = tv.map(handleTv)
tvList.innerHTML = tvItem.join('')

// const tvListItem = document.querySelectorAll('.tv__channel-item') // lấy tất cả thẻ con
// let clientWidthTvChannel = tvListItem[0].offsetWidth // lấy chiều dài của thẻ con

// let index = 0
// let count = 0
// function handleCarousel(i){
//     tvListItem[index].style.transform = `translate3d(${clientWidthTvChannel*(tvListItem.length)*i}px,0px,0px)`
//     index++
// }
// let i = 1
// setInterval(()=>{
//     count++
//     tvList.style.transition ="transform 0.5s ease-in-out";
//     tvList.style.transform = `translate3d(${-clientWidthTvChannel*(count)}px,0px,0px)`
//     if(index == tvListItem.length ){
//         i += 1
//         index = 0
//     }
//     if(count>1){
//         handleCarousel(i)
//     }
    
// },1000) 




// const fixedCallIcon = document.querySelector('.fixed__left img')


// const run = setInterval(()=>{
//     fixedCallIcon.classList.toggle('animationCall')
//     // fixedCallIcon.style.transform = "rotate(-10deg) !important"
//     setInterval(()=>{
//         fixedCallIcon.style.transform = "scale(1.1)"

//     },300)
// }, 400)

