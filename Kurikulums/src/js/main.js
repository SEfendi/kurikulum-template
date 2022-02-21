$('.owl-carousel').owlCarousel({
    loop: true,
    items : 1, 
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false,
    dots:false,
})


// faq js 

$(document).ready(function(){
    $('.accordion-toggle').on("click", function() {
      
      $(this).find('.icon-toggle').toggleClass('fa-circle-up fa-circle-down');
    })
  });

  
// cours nav js

  $(document).ready(function($){
    $('.navbutton').click(function(){
        $('.navbutton').removeClass("active-b");
        $(this).toggleClass("active-b");
    });
  });


  