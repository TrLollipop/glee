$(function() {
  $('.slider__item').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
  });

  // $('.products__galery-item').on('mouseenter', function() {
  //   $('.products__galery-menu').css('display', 'flex');
  // });

  // $('.products__galery-item').on('mouseleave', function () {
  //   $('.products__galery-menu').css('display', 'none');
  // });

  var config = {
    controls: {
      scope: 'local',
    }
  };

  var mixer = mixitup('[data-ref="container-1"]', config);
  var mixer = mixitup('[data-ref="container-2"]', config);
});