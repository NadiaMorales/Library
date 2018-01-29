'use string';
// tamaños para imagenes
const img = document.getElementsByClassName('img-xs');
for (i = 0; i < img.length; i++) {
  img[i].style.width = '20em';
  // img[i].style.padding = '7px';
}
const img2 = document.getElementsByClassName('img-s');
for (i = 0; i < img2.length; i++) {
  img2[i].style.width = '25em';
  //img2[i].style.padding = '7px';
}
const img3 = document.getElementsByClassName('img-m');
for (i = 0; i < img3.length; i++) {
  img3[i].style.width = '30em';
 // img3[i].style.padding = '7px';
  img3[i].style.height = 'auto';
}
const img4 = document.getElementsByClassName('img-l');
for (i = 0; i < img4.length; i++) {
  img4[i].style.width = '40em';
// img4[i].style.padding = '7px';
  img4[i].style.height = 'auto';
}
const img5 = document.getElementsByClassName('img-xl');
for (i = 0; i < img5.length; i++) {
  img5[i].style.width = '45em';
//  img5[i].style.padding = '7px';
}

// funcion que agranda una imagen
const imgHover = document.getElementsByClassName('imgZoom');
for (var i = 0; i < imgHover.length; i++) {
  imgHover[i].addEventListener('mouseover', (event) => event.target.style.transform = 'scale(1.3)');
  imgHover[i].addEventListener('mouseover', (event) => event.target.style.transition = 'all .5s ease-in-out');
  imgHover[i].addEventListener('mouseout', (event) => event.target.style.transform = '');
}

// galeria de imagenes
const cont = document.getElementsByClassName('gallery');
for (i = 0; i < cont.length; i++) {
  cont[i].style.columnCount = 5; // Generador de Columnas
}
