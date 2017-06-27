var arr = ['a', 'a', 'v', 'b'];
//
var count = {};
//
var position = {};
//
for (var i = 0; i <= arr.length ; i++) {
  var char = arr[i];
  if (count[char]) {
    count[char] += 1;
    position[char] += ','+i;
  }
  else {
    count[char] = 1;
    position[char] = i;
  }
}
