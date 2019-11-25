document.addEventListener('DOMContentLoaded', function() {
  var secondarySlider = new Splide('#secondary-slider', {
    gap: 10,
    cover: true,
    isNavigation: true,
    perPage: 5,
    focus: 'center',
    direction: 'ttb',
    pagination: false,
    height: 440,
    // breakpoints: {
    //   '850': {
    //     height: 440,
    //     perPage: 5

    //   }
    // }
  }).mount();

  var primarySlider = new Splide('#primary-slider', {
    // type: 'fade',
    height: '440px',
    width: '100%',
    arrows: true,
    cover: true,
    breakpoints: {
      '675': {
        height: 350,
      }
    }
  }); // do not call mount() here.

  primarySlider.sync(secondarySlider).mount();

  var similar1 = new Splide('#similar1', {
    perPage: 3,
    pagination: false,
    height: 350,
    with: '100%',
    // cover: true,
    focus: true,
    lazyload: true,
    // width: '100vw',
    breakpoints: {
      '750': { perPage: 1 },
      '1070': { perPage: 2 }
    }
  }).mount();
});
