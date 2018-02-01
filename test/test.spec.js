const chai = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<!doctype html><html><body><img class="img-xl" src="assets/img/tigre1.jpg" alt=""></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

var assert = require('chai').assert;
const library = require('../assets/js/index');

describe('Validar clase', () => {
  // it('prueba de validar clase', () =>{
  //   assert.equal(, library.index);
  // });
  it('debería devolver true si se invoca la función por medio de la clase', () => {

  });
  it('debería devolver false si no se invoca', () => {

  });
});
