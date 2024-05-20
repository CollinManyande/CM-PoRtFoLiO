const nav = document.querySelector("nav")
window.addEventListener("scroll", function () {
    nav.classList.toggle ("sticky" , window.scrollY > 100);
});

const arrow1 = document.querySelector('.arrow1')
const arrow2 = document.querySelector('.arrow2')
const arrow3 = document.querySelector('.arrow3')
const arrow4 = document.querySelector('.arrow4')
const arrow5 = document.querySelector('.arrow5')
const arrow6 = document.querySelector('.arrow6')
const arrow7 = document.querySelector('.arrow7')
const arrow8 = document.querySelector('.arrow8')
const arrow9 = document.querySelector('.arrow9')
const arrow10 = document.querySelector('.arrow10')
const arrow11 = document.querySelector('.arrow11')
const arrow12 = document.querySelector('.arrow12')
const pro1 = document.querySelector('.pro1')
const pro2 = document.querySelector('.pro2')
const pro3 = document.querySelector('.pro3')
const pro4 = document.querySelector('.pro4')
const pro5 = document.querySelector('.pro5')
const pro6 = document.querySelector('.pro6')
const pro7 = document.querySelector('.pro7')
const pro8 = document.querySelector('.pro8')
const pro9 = document.querySelector('.pro9')
const pro10 = document.querySelector('.pro10')
const pro11 = document.querySelector('.pro11')
const pro12 = document.querySelector('.pro12')



arrow1.onclick = function(){
    pro1.classList.toggle('cardActive')
}

arrow2.onclick = function(){
    pro2.classList.toggle('cardActive')
}

arrow3.onclick = function(){
    pro3.classList.toggle('cardActive')
}
arrow4.onclick = function(){
    pro4.classList.toggle('cardActive')
}
arrow5.onclick = function(){
    pro5.classList.toggle('cardActive')
}
arrow6.onclick = function(){
    pro6.classList.toggle('cardActive')
}
arrow7.onclick = function(){
    pro7.classList.toggle('cardActive')
}
arrow8.onclick = function(){
    pro8.classList.toggle('cardActive')
}
arrow9.onclick = function(){
    pro9.classList.toggle('cardActive')
}
arrow10.onclick = function(){
    pro10.classList.toggle('cardActive')
}
arrow11.onclick = function(){
    pro11.classList.toggle('cardActive')
}
arrow12.onclick = function(){
    pro12.classList.toggle('cardActive')
}
