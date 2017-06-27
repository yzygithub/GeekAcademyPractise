/**
 * Created by yzy on 2017/4/24.
 */
var array = ['a', 'x', 'b', 'd', 'm', 'a', 'k', 'm', 'p', 'j', 'a'];
//计数
var count = {}; //{a:3,b:1,d:1,j:1,k:1,m:2,p:1,x:1}
//索引
var position = {}; //{a:"0,5,10",b:2,d:3,j:9,k:6,m:"4,7",p:8,x:1}
//遍历原数组并且生成新数组
function arraySearch() {
  var count = {};//变量初始化
  var position = {};//变量初始化
  for (var i = 0; i < array.length; i++) {
    var char = array[i];
    if (count[char]) { //判断是否第一次计数（undefined）
      count[char] += 1; //计数+1
      position[char] += ',' + i; //记录位置
    } else {
      count[char] = 1; //字母第一次计数
      position[char] = i; //字母第一次计数,记录位置。
    }
  }

  //返回出现次数最多的字母的次数（降序排列后取第一个数字）
  var max = count[Object.keys(count).sort(function (a, b) {
    return count[a] <= count[b];//降序排列
  })[0]];

  //出现次数最多的字母如果有多个，全部写入arrayOutput数组中，并输出
  var arrayOutput = [];

  for (i in count) {
    if (count[i] >= max) {
      //将最大值给max
      max = count[i];
      //将出现最多的字母放到arrayOutput数组中
      arrayOutput.push(i);
      console.log(arrayOutput)
    }
  }

  //将出现最多的字母的次数输出
  for (var i = 0; i < arrayOutput.length; i++) {
    key = arrayOutput[i];
    document.getElementById('output').innerHTML = '出现次数最多的字母是:' + arrayOutput + '<br>' + key + '出现的次数为:' + count[key] + '<br>' + key + '的位置分别为:' + position[key] + '<br>';
  }
}
