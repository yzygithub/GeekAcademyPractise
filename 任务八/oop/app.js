/**
 * Created by yzy on 2017/6/1.
 */

(function () {

  function people(name) {
    this._name=name;
    }
  people.prototype.say=function () {
    alert('hello!'+this._name);
  }
  window.people=people;
}());

(function () {
  function student(name) {
    this._name=name;

  }
  student.prototype=new people();
  var superSay = student.prototype.say;

  student.prototype.say=function () {
    superSay.call(this);
    alert('stu-hello!'+this._name);
  }
  window.student=student;
}());

var s=new student('yzy');
s.say();