(function( $ ) {

    $('.caroussel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                dots: true
              }
            }
      ]});
                  
}
)( jQuery );

// window.onscroll = function() {offset()};

// var navbar = document.getElementById("navbar");
// console.log(navbar)
// var sticky = navbar.offsetTop;

// function offset() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("mainNav")
//   } else {
//     navbar.classList.remove("mainNav");
//   }
// }


