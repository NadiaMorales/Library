const chai = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body><div class="gallery"><img class="imgZoom" src="assets/img/Sanfracisco1.jpg" alt="SanFrancisco"><img class="imgZoom" src="assets/img/sidney.jpg" alt="Sidney"><img class="imgZoom" src="assets/img/Francia.jpg" alt="Francia"></div><div><img class="img-xs" src="assets/img/tigre1.jpg" alt="tigre"></div><div><img class="img-s" src="assets/img/tigre1.jpg" alt="tigre"></div><div><img class="img-m" src="assets/img/tigre1.jpg" alt="tigre"></div><div><img class="img-l" src="assets/img/tigre1.jpg" alt="tigre"></div><div><img class="img-xl" src="assets/img/tigre1.jpg" alt="tigre"></div></body></html>');
const { window } = dom;
global.document = window.document;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

console.log('Document > ' + JSON.stringify(document));
var assert = require('chai').assert;
const imgDom = require('../assets/js/index');

describe('Validar clase', () => {
  it('deberia comparar el resultado de la funcion', () => {
    imgDom.imgSizeXs();
    chai.assert.equal(document.getElementsByClassName('img-xs')[0].style.width, '30%');
  });
  it('deberia comparar el resultado de la funcion', () => {
    imgDom.imgSizeS();
    chai.assert.equal(document.getElementsByClassName('img-s')[0].style.width, '50%');
  });
  it('deberia comparar el resultado de la funcion', () => {
    imgDom.imgSizeM();
    chai.assert.equal(document.getElementsByClassName('img-m')[0].style.width, '70%');
  });
  it('deberia comparar el resultado de la funcion', () => {
    imgDom.imgSizeL();
    chai.assert.equal(document.getElementsByClassName('img-l')[0].style.width, '90%');
  });
  it('deberia comparar el resultado de la funcion', () => {
    imgDom.imgSizeXl();
    chai.assert.equal(document.getElementsByClassName('img-xl')[0].style.width, '100%');
  });
  it('deberia comparar el resultado de la funcion', () => {
    imgDom.imgGallery();
    chai.assert.equal(document.getElementsByClassName('gallery')[0].style.columnCount, '3');
  });
});
