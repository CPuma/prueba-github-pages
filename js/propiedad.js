document.addEventListener('DOMContentLoaded', function() {
  // var secondarySlider = new Splide('#secondary-slider', {
  //   gap: 10,
  //   cover: true,
  //   isNavigation: true,
  //   perPage: 3,
  //   focus: 'center',
  //   direction: 'ltr',
  //   pagination: false,
  //   width: 250,
  //   height: '100%',

  //   breakpoints: {
  //     '950': {
  //       width: '98%',
  //       height: 100,
  //       // pagination: true,
  //       perPage: 2,
  //       direction: 'ttb'
  //     }
  //   }
  // }).mount();

  // var primarySlider = new Splide('#primary-slider', {
  //   type: 'fade',
  //   // heightRatio: 0.5,
  //   width: '100%',
  //   arrows: true,
  //   cover: true
  //   // pagination: false
  // }); // do not call mount() here.

  // primarySlider.sync(secondarySlider).mount();

  var similar1 = new Splide('#similar1', {
    perPage: 3,
    pagination: false,
    height: 350,
    // with: '100%',
    // cover: true,
    focus: true,
    lazyload: true,
    lazyload: true,
    // width: '100vw',
    breakpoints: {
      '750': { perPage: 1 },
      '1070': { perPage: 2 }
    }
  }).mount();
});
