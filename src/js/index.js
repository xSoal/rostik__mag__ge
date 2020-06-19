import jQuery from "jquery";
// slick are auto init into jQuery in proto
import slick from 'slick-carousel'
import simplebar from 'simplebar';


window.$ = jQuery;
window.jQuery = jQuery;



window.onload = function () {



  $('.slider').slick({
    autoplay: true,
    // appendDotes: $('.slider__dotes')
    dots: true,
  });

  const sliders = $('.ownS');
  if( sliders ){
    sliders.each(function (i, slider, ctx) {
      const navs = $(slider).find('.ownS__nav');

      navs.each((i,nav)=>{
        nav.onclick = function() {
          clearActiveNav();
          hideAllSliders();

          this.classList.add('active');
          const navIndex = nav.getAttribute('data-index');
          $(slider).find(`.ownSlide[data-index="${navIndex}"]`)[0].classList.add('ownSlide-active');
        }
      });

      const clearActiveNav = () => {
        navs.each((i,nav)=>{
          nav.classList.remove('active');
        });
      };

      const hideAllSliders = () => {
        $(slider).find('.ownSlide').each((i, slide) => {
          slide.classList.remove('ownSlide-active')
        });
      }

    })


  }







};




