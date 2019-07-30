$('.slider__wrap').each(function () {
  $(this).slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    infinite: false
  })
});

$('.slider').each(function () {
  $('.slider__pagination').append('<span></span>');
  $('.slider__pagination span:eq(0)').addClass('active');
});


$(window).on('scroll', function () {
  var windowScroll = $(this).scrollTop();
  var slidersScrolltop = $('.sliders').offset().top;
  var slidersHeight = ($('.sliders').innerHeight() * 0.9) + slidersScrolltop;
  $('.slider').each(function () {
    var SlideScrolltop = $(this).offset().top - 20;
    if (windowScroll > SlideScrolltop) {
      var index = $(this).index();
      $('.slider__pagination span:eq(' + index + ')').addClass('active').siblings().removeClass('active');
      var sliderAnchor = index + 2;
      $('.slider-next').attr('href', '#slider' + sliderAnchor);
    }
  });
  if (windowScroll > slidersScrolltop && windowScroll < slidersHeight) {
    $('.slider__pagination, .slider-next').addClass('active');
  } else {
    $('.slider__pagination, .slider-next').removeClass('active');
  }
});




$('.slick-slide').hover(
  function () {
    $(this).siblings('.slick-slide').css({
      "opacity": 0.2
    })
    $(this).css({
      "opacity": 1
    });
    var activeIndex = $(this).siblings('.slick-slide.slick-active').index();
    var index = $(this).index();
    console.log(index, activeIndex);
    if (!$(this).hasClass('slick-active')) {
      if (index < activeIndex) {
        $(this).parents('.slider__wrap').css({
          'transform': 'translateX(5vw)'
        });
        $(this).css({
          'transform': 'translateX(2vw)'
        })
      } if (index > activeIndex) {
        $(this).parents('.slider__wrap').css({
          'transform': 'translateX(-5vw)'
        });
        $(this).css({
          'transform': 'translateX(-2vw)'
        })
      }
    }
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
    $(this).parents('.slider__wrap').css({
      'transform': 'translateX(0vw)'
    });
    $(this).css({
      'transform': 'translateX(0vw)'
    })
  }
);


$('.slick-slide').on('click', function () {
  var index = 0;
  index = $(this).index();
  $(this).parents('.slider__wrap').slick('slickGoTo', index);
});



$("a[href^='#']").click(function () {
  var _href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
  return false;
});

$('.faq__title').on('click', function () {
  if (!$(this).hasClass('open-state')) {
    $(this).addClass('open-state');
    $(this).next().slideDown();
  } else {
    $(this).removeClass('open-state');
    $(this).next().slideUp();
  }
});


{
  const config = {
    uldor: {
      in: {
        base: {
          duration: 400,
          easing: 'easeOutExpo',
          scale: [0.5, 1],
          opacity: {
            value: 1,
            easing: 'linear',
            duration: 100
          }
        },
        path: {
          duration: 900,
          easing: 'easeOutElastic',
          d: 'M 33.5,31 C 33.5,31 145,31 200,31 256,31 367,31 367,31 367,31 367,110 367,150 367,190 367,269 367,269 367,269 256,269 200,269 145,269 33.5,269 33.5,269 33.5,269 33.5,190 33.5,150 33.5,110 33.5,31 33.5,31 Z'
        },
        content: {
          duration: 900,
          easing: 'easeOutElastic',
          delay: 100,
          scale: [0.8, 1],
          opacity: {
            value: 1,
            easing: 'linear',
            duration: 100
          }
        },
        trigger: {
          translateY: [
            { value: '-50%', duration: 100, easing: 'easeInQuad' },
            { value: ['50%', '0%'], duration: 100, easing: 'easeOutQuad' }
          ],
          opacity: [
            { value: 0, duration: 100, easing: 'easeInQuad' },
            { value: 1, duration: 100, easing: 'easeOutQuad' }
          ],
          color: {
            value: '#6fbb95',
            duration: 1,
            delay: 100,
            easing: 'easeOutQuad'
          }
        }
      },
      out: {
        base: {
          duration: 200,
          easing: 'easeInExpo',
          scale: 0.5,
          opacity: {
            value: 0,
            duration: 75,
            easing: 'linear'
          }
        },
        path: {
          duration: 200,
          easing: 'easeOutQuint',
          d: 'M 79.5,66 C 79.5,66 128,106 202,105 276,104 321,66 321,66 321,66 287,84 288,155 289,226 318,232 318,232 318,232 258,198 200,198 142,198 80.5,230 80.5,230 80.5,230 112,222 111,152 110,82 79.5,66 79.5,66 Z'
        },
        content: {
          duration: 100,
          easing: 'easeOutQuint',
          scale: 0.8,
          opacity: {
            value: 0,
            duration: 50,
            easing: 'linear'
          }
        },
        trigger: {
          translateY: [
            { value: '50%', duration: 100, easing: 'easeInQuad' },
            { value: ['-50%', '0%'], duration: 100, easing: 'easeOutQuad' }
          ],
          opacity: [
            { value: 0, duration: 100, easing: 'easeInQuad' },
            { value: 1, duration: 100, easing: 'easeOutQuad' }
          ],
          color: {
            value: '#666',
            duration: 1,
            delay: 100,
            easing: 'easeOutQuad'
          }
        }
      }
    },
  };

  const tooltips = Array.from(document.querySelectorAll('.tooltip'));

  class Tooltip {
    constructor(el) {
      this.DOM = {};
      this.DOM.el = el;
      this.type = this.DOM.el.getAttribute('data-type');
      this.DOM.trigger = this.DOM.el.querySelector('.tooltip__trigger');
      this.DOM.triggerSpan = this.DOM.el.querySelector('.tooltip__trigger-text');
      this.DOM.base = this.DOM.el.querySelector('.tooltip__base');
      this.DOM.shape = this.DOM.base.querySelector('.tooltip__shape');
      if (this.DOM.shape) {
        this.DOM.path = this.DOM.shape.childElementCount > 1 ? Array.from(this.DOM.shape.querySelectorAll('path')) : this.DOM.shape.querySelector('path');
      }
      this.DOM.deco = this.DOM.base.querySelector('.tooltip__deco');
      this.DOM.content = this.DOM.base.querySelector('.tooltip__content');

      this.DOM.letters = this.DOM.content.querySelector('.tooltip__letters');
      if (this.DOM.letters) {
        // Create spans for each letter.
        charming(this.DOM.letters);
        // Redefine content.
        this.DOM.content = this.DOM.letters.querySelectorAll('span');
      }
      this.initEvents();
    }
    initEvents() {
      this.mouseenterFn = () => {
        this.mouseTimeout = setTimeout(() => {
          this.isShown = true;
          this.show();
        }, 75);
      }
      this.mouseleaveFn = () => {
        clearTimeout(this.mouseTimeout);
        if (this.isShown) {
          this.isShown = false;
          this.hide();
        }
      }
      this.DOM.trigger.addEventListener('mouseenter', this.mouseenterFn);
      this.DOM.trigger.addEventListener('mouseleave', this.mouseleaveFn);
      this.DOM.trigger.addEventListener('touchstart', this.mouseenterFn);
      this.DOM.trigger.addEventListener('touchend', this.mouseleaveFn);
    }
    show() {
      this.animate('in');
    }
    hide() {
      this.animate('out');
    }
    animate(dir) {
      if (config[this.type][dir].base) {
        anime.remove(this.DOM.base);
        let baseAnimOpts = { targets: this.DOM.base };
        anime(Object.assign(baseAnimOpts, config[this.type][dir].base));
      }
      if (config[this.type][dir].shape) {
        anime.remove(this.DOM.shape);
        let shapeAnimOpts = { targets: this.DOM.shape };
        anime(Object.assign(shapeAnimOpts, config[this.type][dir].shape));
      }
      if (config[this.type][dir].path) {
        anime.remove(this.DOM.path);
        let shapeAnimOpts = { targets: this.DOM.path };
        anime(Object.assign(shapeAnimOpts, config[this.type][dir].path));
      }
      if (config[this.type][dir].content) {
        anime.remove(this.DOM.content);
        let contentAnimOpts = { targets: this.DOM.content };
        anime(Object.assign(contentAnimOpts, config[this.type][dir].content));
      }
      if (config[this.type][dir].trigger) {
        anime.remove(this.DOM.triggerSpan);
        let triggerAnimOpts = { targets: this.DOM.triggerSpan };
        anime(Object.assign(triggerAnimOpts, config[this.type][dir].trigger));
      }
      if (config[this.type][dir].deco) {
        anime.remove(this.DOM.deco);
        let decoAnimOpts = { targets: this.DOM.deco };
        anime(Object.assign(decoAnimOpts, config[this.type][dir].deco));
      }
    }
    destroy() {
      this.DOM.trigger.removeEventListener('mouseenter', this.mouseenterFn);
      this.DOM.trigger.removeEventListener('mouseleave', this.mouseleaveFn);
      this.DOM.trigger.removeEventListener('touchstart', this.mouseenterFn);
      this.DOM.trigger.removeEventListener('touchend', this.mouseleaveFn);
    }
  }

  const init = (() => tooltips.forEach(t => new Tooltip(t)))();
};


$('.header__callback').on('click', function () {
  $('.submit').fadeIn(0).addClass('active');
});

$('.submit__close').on('click', function () {
  $('.submit').removeClass('active');
  setTimeout(function () {
    $('.submit').fadeOut(0);
  }, 2200)

});