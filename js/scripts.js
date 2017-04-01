/*

   

   Table Of Content

   

   1. Preloader

   2. Smooth Scroll

   3. Scroll Naviagation Background Change with Sticky Navigation

   4. Mobile Navigation Hide or Collapse on Click

   5. Scroll To Top

   6. Typed.js

   7. Parallax Background

   8. History Filtering
   
   8. Programm Filtering

   8. Gallery Filtering

   9. Magnific Popup

  10. Testimonial Carousel/Slider

  11. Statistics Counter

  12. Google Map

 



*/





(function ($) {

    'use strict';



    jQuery(document).ready(function () {



        

       /* Preloader */

		

        $(window).on('load', function() {

          $('body').addClass('loaded');

        });

		

		

		

       /* Smooth Scroll */



        $('a.smoth-scroll').on("click", function (e) {

            var anchor = $(this);

            $('html, body').stop().animate({

                scrollTop: $(anchor.attr('href')).offset().top - 50

            }, 1000);

            e.preventDefault();

        });

		





       

       /* Scroll Naviagation Background Change with Sticky Navigation */

		 

        $(window).on('scroll', function () {

            if ($(window).scrollTop() > 100) {

                $('.header-top-area').addClass('navigation-background');

            } else {

                $('.header-top-area').removeClass('navigation-background');

            }

        });

		

		

		

		

       /* Mobile Navigation Hide or Collapse on Click */

		

        $(document).on('click', '.navbar-collapse.in', function (e) {

            if ($(e.target).is('a') && $(e.target).attr('class') !== 'dropdown-toggle') {

                $(this).collapse('hide');

            }

        });

        $('body').scrollspy({

            target: '.navbar-collapse',

            offset: 195

        

		 });

		 

		

		

		

        /* Scroll To Top */

		

        $(window).scroll(function(){

        if ($(this).scrollTop() >= 500) {

            $('.scroll-to-top').fadeIn();

         } else {

            $('.scroll-to-top').fadeOut();

         }

	   });

	

	

	    $('.scroll-to-top').click(function(){

		  $('html, body').animate({scrollTop : 0},800);

		  return false;

	    });

		

		

		

		

        /* Typed.js */

		

        $(window).load(function(){

        $(".typing").typed({

            strings: ["МЕЖДУНАРОДНАЯ ОБРАЗОВАТЕЛЬНАЯ СТУДЕНЧЕСКАЯ ПЛОЩАДКА", "SPRING F.R.E.S.H. 2017"],    /* You can change the home section ere and do not use "&" use "and" */
			startDelay: 100,
            typeSpeed: 50,
			backDelay: 1500,
			showCursor: true

          });

         });

        

		 

        /* Parallax Background */



        $(window).stellar({

            responsive: true,

            horizontalScrolling: false,

            hideDistantElements: false,

            horizontalOffset: 0,

            verticalOffset: 0,

        });



        

        /* History Filtering */

        $('.history-carousel-list').owlCarousel({

            items: 1,

			autoPlay:true,

            stopOnHover: false,

			autoplayTimeout:3000, 

            itemsDesktop: [1199, 1],

            itemsDesktopSmall: [980, 1],

            itemsTablet: [768, 1],

            itemsTabletSmall: false,

            itemsMobile: [479, 1],

            autoHeight: true,

            pagination: true,

            transitionStyle : "backSlide"

        });
		
		/* Programm Filtering */

        $('.programm-carousel-list').owlCarousel({

            items: 1,

			autoPlay:true,

            stopOnHover: false,

			autoplayTimeout:3000, 

            itemsDesktop: [1199, 1],

            itemsDesktopSmall: [980, 1],

            itemsTablet: [768, 1],

            itemsTabletSmall: false,

            itemsMobile: [479, 1],

            autoHeight: true,

            pagination: true,

            transitionStyle : "backSlide"

        });

		

		

        /* Gallery Filtering */



        $('.gallery-inner').mixItUp({
			load: {
				filter: '.winter2016'
			}
		});





       

        /* Magnific Popup */



        $('.gallery-popup').magnificPopup({

            type: 'image',

			

            gallery: { enabled: true },

			zoom: { enabled: false,

			        duration: 500

					

          },

		  

         image:{

               markup: '<div class="mfp-figure gallery-pop-up">'+

               '<div class="mfp-close"></div>'+

               '<div class="mfp-img"></div>'+

               '<div class="mfp-bottom-bar gallery_title">'+

               '<div class="mfp-title"></div>'+

               '<div class="mfp-counter"></div>'+

               '</div>'+

               '</div>',



               titleSrc:function(item){

                return item.el.attr('title');

              }

            }

		  

		  

          });



       

	   

		 

        /* Testimonial Carousel/Slider */



        $(".testimonial-carousel-list").owlCarousel({

            items: 1,

            autoPlay: true,

            stopOnHover: false,

            navigation: true,

            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],

            itemsDesktop: [1199, 1],

            itemsDesktopSmall: [980, 1],

            itemsTablet: [768, 1],

            itemsTabletSmall: false,

            itemsMobile: [479, 1],

            autoHeight: true,

            pagination: false,

            transitionStyle : "backSlide"

        });

		

		

		

		

        /* Statistics Counter */

		

        $('.statistics').appear(function() {

           var counter = $(this).find('.statistics-count');

           var toCount = counter.data('count');

      

           $(counter).countTo({

           from: 0,

           to: toCount,

           speed: 2000,

           refreshInterval: 50

           });

	   });

		   

		  

         

         /* Google Map */

		 

         $('#my-address').gMap({

            zoom: 15,

            scrollwheel: true,

            maptype: 'ROADMAP',

            markers:[

            {

            address: "56.012126, 92.869106",  /* You can change your address from here */

            html: "<b>Адрес</b>: <br> 660021, г. Красноярск, проспект Мира, 82",   /* You can change display address text from here */

            popup: true

            }

            ]

            });

              

		   

            });



   })(jQuery);