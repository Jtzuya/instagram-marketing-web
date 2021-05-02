const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.nav-cta');

// main toggle
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menuItems.classList.toggle('open');
});


var scroller = $('#logo-ticker div.footer-logo-slider');
var scrollerContent = scroller.children('ul');
scrollerContent.children().clone().appendTo(scrollerContent);
var sum_width_of_elem = 0;
scrollerContent.children().each(function() {
  var $this = $(this);
  $this.css('left', sum_width_of_elem);
  sum_width_of_elem += $this.outerWidth(true);
});

var fullW = sum_width_of_elem / 2;
var viewportW = scroller.width();

// Scrolling speed management
var controller = { curSpeed: 0, fullSpeed: 2 };
var $controller = $(controller);
var contSpeed = function(newSpeed) {
var duration = 600;
  $controller.stop(false).animate({ curSpeed: newSpeed });
};

$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});