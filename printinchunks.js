
var https = require('https');


//function print in chunks html
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response){
    response.setEncoding('utf8');
    response.on('data', function (data){
      console.log('Chunk Received. Length: ', data.length);
      console.log(data);
    });

    response.on('end', function() {
	console.log('Response stream finished');
    });
    
    response.on('error', function(error){
        throw error;
    });




  });  
  
}

getAndPrintHTMLChunks();

//http (protocol) : (separator) // (means you are sending to a server request) @ (addressing the user at that server),      ?key=value&key=value#fragment (query string start:? key value pairs are separated with an & symbol until # symbol" The very last part wti the #fragment = page fragment, once the resource has been rendered, find teh resource that has been rendered, render the id.:

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (requestOptions) {
  var str = "";
  /*
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };*/

  var req = https.request(requestOptions, function(response){
	response.on('data', function(chunk){
		str += chunk;
	});

	response.on('end', function(){
		console.log(str);
	});

  }).end();


}

getAndPrintHTML(options);


//Step 3 callback printing

function getHTML (options, callback) {

  /* Add your code here */
  var str = "";
  /*
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };*/

  var req = https.request(requestOptions, function(response){
	response.on('data', function(chunk){
		str += chunk;
	});

	response.on('end', function(){
		callback(str);
	});

  }).end();


}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

module.exports = function getHTML (requestOptions, callback) {
    /* Your code here */
  /* Add your code here */
  var str = "";
  /*
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };*/

  var req = https.request(requestOptions, function(response){
	response.on('data', function(chunk){
		str += chunk;
	});

	response.on('end', function(){
		callback(str);
	});

  }).end();


};
