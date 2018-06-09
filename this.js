
var outside = 'outside';

var obj = {
  outside: 'Inside obj',
  prop:{
    outside: 'Inside of prop',
    getOutside: function() {
      return this.outside;
    }
  }
}

console.log(obj.prop.getOutside());

var fun = obj.prop.getOutside;
console.log(fun());