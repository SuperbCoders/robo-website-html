$('.slider__wrap').each(function () {
  $(this).slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    infinite: false
  })
});


$('.slick-slide').hover(
  function () {
    $(this).siblings('.slick-slide').css({
      "opacity": 0.2
    })
    $(this).css({
      "opacity": 1
    });
  },
  function () {
    $('.slick-slide.slick-active').css({
      "opacity": 1
    })
    if (!$(this).hasClass('slick-active')) {
      $(this).css({
        "opacity": 0.2
      });
    }
  }
);


$('.slick-slide').on('click', function () {
  var index = 0;
  index = $(this).index();
  $(this).parents('.slider__wrap').slick('slickGoTo', index);
});