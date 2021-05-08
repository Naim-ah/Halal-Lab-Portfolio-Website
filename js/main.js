const cursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-item a");

window.addEventListener('mousemove',cursorMove);

function cursorMove(e){
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('mousemove',() => {
        cursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    })

    link.addEventListener('mouseleave',() => {
        cursor.classList.remove('link-grow');
        link.classList.remove('hovered-link');
    })
})

new WOW().init();




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