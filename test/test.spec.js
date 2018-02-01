const chai = require('chai');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let domsPicture = new JSDOM('<!doctype html><html><body><input id="img-xs"></input></body></html>');
const { window } = domsPicture;
global.document = domsPicture;
global.window = window;
global.navigator = {
    userAgent: 'node.js',
};


const IMGDom = require("../assets/js/index");

describe("Valida clase img-xl",function(){
	IMGDom('#img-xs');


	it("prueba de validar clase",function(){
		IMGDom.sPicture();
		chai.assert.equal(document.getElementsByClassName("img-xs")[0].)
	
	})

});
	
