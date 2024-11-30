let searchbtn=document.querySelector("#search-btn")
let searchform=document.querySelector(".search-form")
let loginform=document.querySelector(".login-form")
let menubar=document.querySelector("#menu-bar")
let amenu=document.querySelector(".navbar")
function showbar(){
    searchbtn.classList.toggle("fa-times")
    searchform.classList.toggle("active")
}
function showform(){
    loginform.classList.add("active")
}
function hideform(){
    loginform.classList.remove("active")
}
function showmenu(){
    menubar.classList.toggle("fa-times")
    amenu.classList.toggle("active")
}
var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
    },
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        }, 
        1024:{
            slidesPerView:3
        },


        
    }

});

