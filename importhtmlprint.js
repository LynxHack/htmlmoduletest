var getHTML = require("./printinchunks.js");
var printlower = require("./print_lowercase.js");
var printupper = require("./print_uppercase.js");
var print1337 = require("./print_1337");
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

var requestOptions2 = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

var requestOptions3 = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

var requestOptions4 = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};


getHTML(requestOptions, function(data){ console.log(data);});
getHTML(requestOptions2, printlower);
getHTML(requestOptions3, printupper);
getHTML(requestOptions4, print1337);





/////////////
