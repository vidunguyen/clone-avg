
const option = document.querySelector('.option')
const optionList = document.querySelector('.option__list')
const optionIcon = document.querySelector('.option-default i')
const optionDefault = document.querySelector('.option-default')

optionDefault.addEventListener('click', ()=>{
    optionList.classList.toggle('open')
    optionDefault.classList.toggle('font-bold')
    optionIcon.classList.toggle('rotate-180')
})