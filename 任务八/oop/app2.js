/**
 * Created by yzy on 2017/6/1.
 */

function person() {
  var _this={}
  _this.sayhello=function () {
    alert('p-hello!');
  }
  return _this;
}

function teacher() {
  var _this=person();
  var superSay=_this.sayhello;
  _this.sayhello=function () {
    superSay.call(_this);
    alert('t-hello!');
  }
  return _this;
}
var t= teacher();
t.sayhello();