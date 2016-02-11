var Grains = function() {};


Grains.prototype.square = function(num) {
  var total = 1;
  for (var i = 1; i <= num; i++) {
    if (num === 1) {
      return total.toString();
    }
    else {
      total = (i - 1) * 2;
    }
  }
  return total.toString();
};


module.exports = Grains;