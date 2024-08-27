
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var  a = document.querySelector("#elem12")
// var image = a.getAttribute("data-image")
// console.log(image);

function page4Animation(){

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    
    fixed.style.display = "block";
})
elemC.addEventListener("mouseleave",function(){
    
    fixed.style.display = "none";

})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
        
    })
})
}


function swiperAnimation(){

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

}

swiperAnimation();
page4Animation();
