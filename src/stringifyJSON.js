// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if (typeof obj === 'number') {
    return '' + obj;
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'boolean') {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (obj.constructor === Array) {
    var output = [];

    for (var i = 0; i < obj.length; i++) {
      var ele = obj[i];
      output.push(stringifyJSON(ele));
    }
    
    return '[' + output + ']';  
  }
  if (obj.constructor === Object) {
    if (obj === undefined || typeof obj === 'function') {
      continue;
    }
    var output = {};

    for (var key in obj) {
      output[key] = stringifyJSON(obj[key]);
    }  
     
    var string = '';
    for (var key in output) {
      string = string + key + output[key];
    } 

    return '{' + string '}';
  }
};
