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
    var output = '';

    for (var key in obj) {
      output = output + key + ':' + obj[key];
    }
    

    
     
    

    return '{' + output + '}';
  }
};
