

// wow js=======
// new WOW().init();

// preloader
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
  });


// process item
// const process = document.querySelector(".process-item");

// process.addEventListener("mouseover",() => {
//     const smText = document.querySelector(".process-sm-text");
//     smText.classList.add("show")
// })

// process.addEventListener("mouseout",() => {
//     const smText = document.querySelector(".process-sm-text");
//     smText.classList.remove("show")
// })






// owl carousel=======
$('.clients-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

// aos js
AOS.init();
window.addEventListener("load", AOS.refresh);
AOS.init({
    once: true
})
