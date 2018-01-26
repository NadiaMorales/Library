'use string';
 const  cont = document.getElementsByClassName('gallery');
for (i = 0; i < cont.length; i++){
cont[i].style.columnCount = 3; // Generador de Columnas
}

const img = document.getElementsByClassName('img-xs');
for (i = 0; i < img.length; i++) {
  img[i].style.width = '100%';
  img[i].style.padding = '7px';
}
const img2 = document.getElementsByClassName('img-s');
for (i = 0; i < img2.length; i++) {
	img2[i].style.width = '100%';
	img2[i].style.padding = '7px';
}
const img3 = document.getElementsByClassName('img-m');
for (i = 0; i < img3.length; i++) {
	img3[i].style.width = '100%';
	img3[i].style.padding = '7px';
	img3[i].style.height = '30em';
}
const img4 = document.getElementsByClassName('img-l');
for (i = 0; i < img4.length; i++) {
	img4[i].style.width = '100%';
	img4[i].style.padding = '7px';
	img4[i].style.height = '22em';
}
const img5 = document.getElementsByClassName('img-xl');
for (i = 0; i < img5.length; i++) {
	img5[i].style.width = '100%';
	img5[i].style.padding = '7px';
}

