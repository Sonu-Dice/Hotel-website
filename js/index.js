let nav= document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop>50){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

// Nav hide
let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


var swiper=new Swiper(".mySwiper",{
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay:{
        delay: 3500,
    },
});

document.addEventListener("DOMContentLoaded",() =>{
    function counter(id, start, end, duration){
        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increment=end>start ? 1 : -1,
        step=Math.abs(Math.floor(duration/range)),
        timer=setInterval(()=> {
            current+=increment;
            obj.textContent=current;
            if(current==end){
                clearInterval(timer);
            }
        },step);
    }
    counter("counte1", 0 , 1287, 3000);
    counter("counte2", 100 , 5768, 2500);
    counter("counte3", 0 , 1440, 3000);
    counter("counte4", 0 , 7100, 3000);
})


// var swiper = new Swiper(".our-partner",{
//     slidesPreView: 5,
//     spaceBetween: 30,
//     loop: true,
//     autoplay: {
//         delay: 2000,
//     },
//     breakpoints: {
//         '991': {
//             slidesPreView: 5,
//             spaceBetween: 10,
//         },
//         '767': {
//             slidesPreView: 3,
//             spaceBetween: 10,
//         },
//         '320':{
//             slidesPreView: 2,
//             spaceBetween: 8,
//         },
//     },
// }); 