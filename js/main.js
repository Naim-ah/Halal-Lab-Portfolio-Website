
// custom cursor======
// const cursor = document.querySelector(".cursor");
// const cursor2 = document.querySelector(".cursor2");

// const navLink = document.querySelectorAll(".nav-item a");
// const mainContent = document.querySelectorAll(".main-content h1")

// document.addEventListener("mousemove",function(e){
//     cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
// })

// navLink.forEach(link => {
//     link.addEventListener('mousemove',() => {
//                 cursor.classList.add('link-grow');
//                 link.classList.add('hovered-link');
//             })
        
//             link.addEventListener('mouseleave',() => {
//                 cursor.classList.remove('link-grow');
//                 link.classList.remove('hovered-link');
//             })
// })

// mainContent.forEach(content => {
//     content.addEventListener('mousemove',() => {
//                 cursor.classList.add('content-grow');
//                 content.classList.add('hovered-content');
//             })
        
//             content.addEventListener('mouseleave',() => {
//                 cursor.classList.remove('content-grow');
//                 content.classList.remove('hovered-content');
//             })
// })


// intersectionObserver =========

window.addEventListener('DOMContentLoaded', setup); 

function setup() {
    const options = {
        rootMargin: '0px 0px -200px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            } else {
                return;
            }
        })
    }, options);

    const h1 = document.querySelector('.scroll');
    observer.observe(h1);
    const scroll2 = document.querySelector('.scroll2');
    observer.observe(scroll2);
    const scroll3 = document.querySelector('.scroll3');
    observer.observe(scroll3);
    const scroll4 = document.querySelector('.scroll4');
    observer.observe(scroll4);

    const sectionContent = document.querySelectorAll('.section-content');
    sectionContent.forEach(secContentItem => observer.observe(secContentItem));

    const projectItemTitle = document.querySelectorAll('.project-item-title');
    projectItemTitle.forEach(item => observer.observe(item));

}

// wow js=======
// new WOW().init();



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