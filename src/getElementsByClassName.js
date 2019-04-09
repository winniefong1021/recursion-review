// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var results = [];
  
  var getChildren = function(node) {
    
    var classes = node.classList;
    if (node.classList && classes[className] === className) {
      results.push(node);
    }
    if (node.hasChildNodes()) {
      var children = node.childNodes;
      for (var i = 0; i < children.length; i++) {
        getChildren(children[i]);
      }
    }
  }   

  getChildren(document.body);
  return results;
};
