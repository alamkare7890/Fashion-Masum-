$(document).ready(function () {
      $('#slick-slide-control00').text("");
      $('#slick-slide-control01').text("");
      $('#slick-slide-control02').text("");
      $('.product-slider').slick({
      responsive: [
        
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1500, 
          }
      
        },
        
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1500, 
          }
        },
    
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1500, 

          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 1500, 
          }
        
        },
        {
          breakpoint: 480,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 1500, 
            
          }
        
        }
 
    ]   
  });

  
  $(".slide-testi-image").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slide-testi",
    
    responsive: [
      {
        breakpoint: 1920,
          setting:{

          }
      
      
      },
    ]
    
  
  
  })
  
  $(".slide-testi").slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slide-testi-image",
    prevArrow: "<button type='button' class='slick-prev pull-left' > <i class='fas fa-arrow-right' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-arrow-left' aria-hidden='true'></i></button>",
                
    
                
  })

  
  
  $(".slide-blog-content").slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slide-blog-image",
    
    prevArrow: "<button type='button' class='slide-prev pull-left'><i class='fas fa-arrow-right aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slide-next pull-right'><i class='fas fa-arrow-left aria-hidden='true'></i></button>",
  
   /* resposive:[
      {
        breakpoint: 1920,
        settings: {
          arrows: false,
        
        }
      
      
      },
      {
        breakpoint: 1680,
        settings: {
          arrows: false,
        
        }
      
      
      }

  ]*/
    
    
    
    
    
    
    
  })
/*
  var a = "<button type='button' class='slide-next pull-right'><i class='fas fa-arrow-left aria-hidden='true'></i></button><button type='button' class='slide-next pull-right'><i class='fas fa-arrow-right aria-hidden='true'></i></button>";
  $('#slideButton').html(a);
  */
  $(".slide-blog-image").slick({
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    asNavFor: ".slide-blog-content",
  })
  

  
  $(".slide-offer-box").slick({
    
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    
  
  })
/*
  $(".slide-collection").slick({
  
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  
  })
*/
  

/*
  var a = "<button type='button' class='left-btn'><i class='fas fa-arrow-left' aria-hidden='true'></i></button>";
  $('#slideButton').html(a);
  
  var b = "<button type='button' class='left-btn'><i class='fas fa-arrow-right' aria-hidden='true'><i/></button>";
  
  $('#slideButton').html(b);
  
  */
 
  /*Dom*/
  /*=========nav-icon==========*/
  $("#navBtn").click(function () {
  
    $("#openNav").toggleClass('disNav');
    
  })
  

  
  
  
  /*======Animation (AOS)=====installation=====*/
  AOS.init();
  
  /*==================scroll-topbnt============*/

});