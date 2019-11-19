document.addEventListener("DOMContentLoaded", function() {
  // ===========CARDSS=================
  let cardsSlider = new Splide("#card-slider", {
    perPage: 3,
    pagination: false,
    height: 350,
    cover: true,
    focus: true,
    lazyload: true,
    lazyload:true,
    // width: '100vw',
    breakpoints: {
      "750": { perPage: 1 },
      "1070": { perPage: 2 }
    }
  }).mount();
});
