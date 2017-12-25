require('babel-register')();

var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

var jsdom = require('jsdom').jsdom;

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;