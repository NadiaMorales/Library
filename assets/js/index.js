'use stric';
// tamaños para imagenes
function sPicture() {
  const img = document.getElementsByClassName('img-xs');
  for (i = 0; i < img.length; i++) {
    img[i].style.width = '30%';
    img[i].style.padding = '7px 0';
  };
  const img2 = document.getElementsByClassName('img-s');
  for (i = 0; i < img2.length; i++) {
    img2[i].style.width = '50%';
    img2[i].style.padding = '7px 0';
  };
  const img3 = document.getElementsByClassName('img-m');
  for (i = 0; i < img3.length; i++) {
    img3[i].style.width = '70%';
    img3[i].style.height = 'auto';
    img3[i].style.padding = '7px 0';
  };
  const img4 = document.getElementsByClassName('img-l');
  for (i = 0; i < img4.length; i++) {
    img4[i].style.width = '90%';
    img4[i].style.height = 'auto';
    img4[i].style.padding = '7px 0';
  };
  const img5 = document.getElementsByClassName('img-xl');
  for (i = 0; i < img5.length; i++) {
    img5[i].style.width = '100%';
    img5[i].style.height = 'auto';
    img5[i].style.padding = '7px 0';
  };
  // funcion que agranda una imagen
  const imgHover = document.getElementsByClassName('imgZoom');
  for (var i = 0; i < imgHover.length; i++) {
    imgHover[i].addEventListener('mouseover', (event) => event.target.style.transform = 'scale(1.3)');
    imgHover[i].addEventListener('mouseover', (event) => event.target.style.transition = 'all .5s ease-in-out');
    imgHover[i].addEventListener('mouseout', (event) => event.target.style.transform = '');
  };
  // galeria de imagenes
  const cont = document.getElementsByClassName('gallery');
  for (i = 0; i < cont.length; i++) {
    cont[i].style.columnCount = 3; // Generador de Columnas
  };

  const cont2 = document.getElementsByClassName('img-fluid');
  for (var i = 0; i < cont2.length; i++) {
    cont2[i].style.columnCount = '1';
  };
}
sPicture();

// module.exports = sPicture();