/**
 * Created by yzy on 2017/5/25.
 */
console.log("header.js on");

var uname = $.cookie("uname"),
  domain = $.cookie("domain"),
  uuid = $.cookie("uuid");
var protocol = "https:" == document.location.protocol ? "https://" : "http://";
var nolgoin = '<dl class="submenu">';
nolgoin += '<i class="top-icon"></i>';
nolgoin += '<dd><a href="' + protocol + 'passport.jikexueyuan.com/sso/reg_phone" class="reg-btn">注册</a>|<a href="' + protocol + 'passport.jikexueyuan.com/sso/login" class="login-btn">登录</a></dd>';
nolgoin += '<dd><a href="' + protocol + 'passport.jikexueyuan.com/sso/login"><i class="xxzx-icon"></i>学习中心</a></dd>';
nolgoin += '<dd><a href="' + protocol + 'passport.jikexueyuan.com/sso/login"><i class="grzy-icon"></i>个人主页</a></dd>';
nolgoin += '<dd><a href="' + protocol + 'passport.jikexueyuan.com/sso/login"><i class="xxtz-icon"></i>消息通知</a></dd>';
nolgoin += '<dd><a href="' + protocol + 'passport.jikexueyuan.com/sso/login"><i class="zhsz-icon"></i>账号设置</a></dd>';
nolgoin += "</dl>";
var logined = '<a href="' + protocol + 'my.jikexueyuan.com/setting/user/"><img src="" id="userpoto"/></a>';
logined += '<i id="uservip-icon"></i>';
logined += '<dl class="submenu">';
logined += '<i class="top-icon"></i>';
logined += '<dd id="getUserLevel">';
logined += "</dd>";
logined += '<dd><a href="' + protocol + 'xue.jikexueyuan.com/"><i class="xxzx-icon"></i>学习中心</a></dd>';
logined += '<dd><a href="' + protocol + "my.jikexueyuan.com/" + (domain ? domain : uuid) + '"><i class="grzy-icon"></i>个人主页</a></dd>';
logined += '<dd><a href="' + protocol + 'www.jikexueyuan.com/member/notifications/"><i class="xxtz-icon"></i>消息通知<em class="unread-num"></em></a></dd>';
logined += '<dd><a href="' + protocol + 'my.jikexueyuan.com/setting/user/"><i class="zhsz-icon"></i>账号设置</a></dd>';
logined += '<dd><a href="' + protocol + 'passport.jikexueyuan.com/submit/logout"><i class="tc-icon"></i>退出登录</a></dd>';
logined += "</dl>";
var header = { init: function() { this.state();
  this.bind();
  this.selected() }, bind: function() {
  var me = this;
  $(".icon-box").on("click", "#search-btn", this.searchshow);
  $(".searchbox").on("click", "#close-btn", this.searchide);
  $(".searchbox").on("click", "#search-btn", this.sbtnGo);
  $("#web_search_header").on("keyup", { "_this": me }, this.siptKeyUp) }, selected: function() {
  var hostname = this.hostname(),
    hostunit = this.hostunit();
  if (document.location.href == protocol + "www.jikexueyuan.com/" || document.location.href == protocol + "www.jikexueyuan.com/index/" || document.location.href == protocol + "www.jikexueyuan.com/index.html") { $(".header-nav>li:eq(0)>a").css("color", "#35b558") }
  if (hostname == "www" && hostunit == "zhiye") { $(".header-nav>li:eq(1)").css("color", "#35b558");
    $(".header-nav>li:eq(1)>i").css("border-color", "#35b558") }
  if ((hostname == "www" && (hostunit == "course" || hostunit == "path" || hostunit == "tag" || hostunit == "vip")) || (hostname == "ke" && (hostunit == "zhiye" || hostunit == "xilie"))) { $(".header-nav>li:eq(2)").css("color", "#35b558");
    $(".header-nav>li:eq(2)>i").css("border-color", "#35b558") }
  if (hostname == "wenda" || hostname == "wiki" || hostname == "qun" || hostname == "download") { $(".header-nav>li:eq(3)").css("color", "#35b558");
    $(".header-nav>li:eq(3)>i").css("border-color", "#35b558") } }, hostname: function() {
  var hostname = document.location.hostname.split(".");
  return hostname[0] }, hostunit: function() {
  var split = document.location.pathname.split("/");
  return split[1] }, searchshow: function() { $(".searchbox").addClass("scale") }, searchide: function() { $(".searchbox").removeClass("scale") }, sbtnGo: function() {
  var val = $("#web_search_header").val();
  if (val != "") { location.href = "//search.jikexueyuan.com/course/?q=" + val } }, siptKeyUp: function(e) { var_focus = $("#web_search_header").is(":focus");
  if (var_focus == true && (e.keyCode == 13 || e.keyCode == 10)) { e.data._this.sbtnGo() } }, state: function() {
  var authcode = $.cookie("authcode");
  if (authcode == undefined || authcode == "") { $("#loginlist").removeClass("logged").addClass("login-icon");
    $("#loginlist").html(nolgoin) } else {
    var avatar = $.cookie("avatar");
    $("#loginlist").removeClass("login-icon").addClass("logged");
    $("#loginlist").html(logined);
    $("#userpoto").attr("src", avatar);
    this.getUserLevel() } }, getUserLevel: function() {
  var is_expire = $.cookie("is_expire"),
    level_id = $.cookie("level_id"),
    vip_status = $.cookie("vip_status"),
    ca_status = $.cookie("ca_status"),
    leveltext;
  if (vip_status == 1) { $("#uservip-icon").addClass("year-icon");
    leveltext = '<a href="' + protocol + 'my.jikexueyuan.com/user/myvip" class="year-vip"></a>' } else {
    if (ca_status == 1) { $("#uservip-icon").addClass("rz-icon") } else { $("#uservip-icon").addClass("xf-icon") }
    leveltext = '<a href="' + protocol + 'my.jikexueyuan.com/user/myvip" class="xf-vip"></a>' }
  $("#getUserLevel").html(leveltext);
  if (ca_status == 1) { $("#getUserLevel").prepend('<a href="' + protocol + 'my.jikexueyuan.com/user/myvip" class="rz-vip"></a>') } else { $("#getUserLevel").prepend('<a href="' + protocol + 'my.jikexueyuan.com/user/myvip" class="rzno-vip"></a>') } } };
$(function() { header.init() });
