document.addEventListener('DOMContentLoaded', function() {
	// ===========CARDSS=================
	let cardsSlider = new Splide('#card-slider', {
		perPage: 4,
		pagination: false,
		height: 350,
		breakpoints: {
			'800': { perPage: 1 }
		}
	}).mount();
});
