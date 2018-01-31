const chai = require('chai');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let domsPicture = new JSDOM('<!doctype html><html><body><img class="img-xl" src="assets/img/tigre1.jpg" alt=""></body></html>');
const { window } = domsPicture;
global.document = domsPicture;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

const library = require('../assets/js/index');

describe('Validar clase', () => {
  library('img-xl');

  it('prueba de validar clase', () =>{
    assert.equal(true, library.sPicture());
  });
});
