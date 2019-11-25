// CHECK BOXES del FILTRO
function selectModeda(id) {
  for (var i = 1; i <= 2; i++) {
    document.getElementById('chMoneda' + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectBaños(id) {
  for (var i = 1; i <= 4; i++) {
    document.getElementById('chBaño' + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function selectDormitorios(id) {
  for (var i = 1; i <= 4; i++) {
    document.getElementById('chDormitorio' + i).checked = false;
  }
  document.getElementById(id).checked = true;
}
// =====================================

// ==========OCULTANDO FILTROS=========
let filtro = document.getElementById('filtro');

let ocultarFiltro = function () {
  if (window.innerWidth < 850) {
    filtro.classList.add('pushbar');
    filtro.classList.add('from_left');
  } else {
    filtro.classList.remove('pushbar');
    filtro.classList.remove('from_left');
  }
};

ocultarFiltro();

window.addEventListener('resize', function (e) {
  ocultarFiltro();
});
// =====================================00

//=========  INSTANCIANDO  SLIDERS ==========
let inmublesSplides = document.getElementsByClassName('inmueble_splide');
for (let i = 0; i < inmublesSplides.length; i++) {
  let id = '#' + inmublesSplides[i].id;
  document.addEventListener('DOMContentLoaded', function () {
    // new Splide('#image-slider', {
    new Splide(id, {
      cover: true,
      pagination: true,
      focus: 'center',
      width: '110%',
      trimSpace: false
    }).mount();
  });
}


let cards = document.getElementsByClassName("general");

for (let i = 0; i < cards.length; i++) {
  console.log(i);
  cards[i].addEventListener('click', function () {
    let link = document.querySelector(`a[data-id="${this.id}"]`);
    link.click();
  })
}