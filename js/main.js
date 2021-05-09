

// custom cursor======
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

const navLink = document.querySelectorAll(".nav-item a");
const mainContent = document.querySelectorAll(".main-content h1")

document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
})

navLink.forEach(link => {
    link.addEventListener('mousemove',() => {
                cursor.classList.add('link-grow');
                link.classList.add('hovered-link');
            })
        
            link.addEventListener('mouseleave',() => {
                cursor.classList.remove('link-grow');
                link.classList.remove('hovered-link');
            })
})

mainContent.forEach(content => {
    content.addEventListener('mousemove',() => {
                cursor.classList.add('content-grow');
                content.classList.add('hovered-content');
            })
        
            content.addEventListener('mouseleave',() => {
                cursor.classList.remove('content-grow');
                content.classList.remove('hovered-content');
            })
})
// wow js=======
new WOW().init();



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