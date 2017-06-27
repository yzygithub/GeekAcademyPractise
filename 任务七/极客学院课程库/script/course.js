/**
 * Created by yzy on 2017/5/28.
 */

$(document).ready(function () {
  //header/ show and close search-box
  $('#search-btn').click(function () {
    $('#searchbox').addClass('scale');
  });
  $('#close-btn').click(function () {
    $('#searchbox').removeClass('scale');
  });
  // gotop
  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
        $("#gototop").fadeIn();
      } else {
        $("#gototop").fadeOut();
      }
    });
    $("#gototop").click(function() {
      $("body,html").stop().animate({scrollTop:0},800);
    });
  });
  //change list style
  $(".kuai-icon").click(function () {
    $(".zhongji").hide(); $(".learn-number").hide(); $("#changeid").removeClass("lesson-list2").addClass("lesson-list"), $(".list-icon").removeClass("curr"); $(this).addClass("curr"); $('li.li-style').removeClass('li-style2').addClass('li-style1');
    var e = $(".lesson-list p");
    e.height(0), e.hide();
  });
  $(".list-icon").click(function () {
    var e = $(".lesson-list p");
    e.show();  e.height(36);$(".learn-number").show();$(".zhongji").show(); $("#changeid").removeClass("lesson-list").addClass("lesson-list2"); $(".kuai-icon").removeClass("curr");$(this).addClass("curr"); $('li.li-style').removeClass('li-style1').addClass('li-style2');
  });

  //lesson-hover
  var this_li;
  function lessonHover() {
    // console.log('in');
    // console.log(this_li);
    var n = this_li.find(".lessonplay");
    n.stop().animate({opacity:1},600);
    var a = this_li.children(".lesson-infor"),
      s = this_li.find(".learn-number"),
      r = this_li.find(".zhongji");
    s.show(), r.show(), a.addClass("lesson-hover"), this_li.find(".lessonicon-box").css("bottom", "-2px"),
      a.stop().animate({height: 175},600);
    var l = a.find("p");
    l.show().stop().animate({display: "block", height: 52, opacity: 1},150);
  }
  function lessonOut() {
    // console.log('out');
    // console.log(this_li);
    var n = this_li.find(".lessonplay");
    n.stop().animate({opacity: 0},600);
    var a = this_li.children(".lesson-infor"),
      s = this_li.find(".learn-number"),
      r = this_li.find(".zhongji");
    s.hide(), r.hide(), a.removeClass("lesson-hover"), this_li.find(".lessonicon-box").css("bottom", "4px"),
      a.stop().animate({height: 88},600);
    var l = a.find("p");
    l.stop().animate({display: "none", height: 0, opacity: 0},300)
  }
  function listLessonHover() {
    this_li.find(".lessonplay").stop().animate({opacity:1},600);
  }
  function listLessonOut() {
    this_li.find(".lessonplay").stop().animate({opacity:0},600);
  }

  function iflessonHover() {
    this_li=$(this);
    if ($(this).hasClass('li-style1')) {
      // console.log('in-ok');
      // console.log($(this));
      lessonHover();
    }else {
      listLessonHover();
    }
  }

  function iflessonOut() {
    this_li=$(this);
    if ($(this).hasClass('li-style1')) {
      // console.log('out-ok');
      // console.log($(this));
      lessonOut();
    }else {
      listLessonOut();
    }
  }

  $('li.li-style1').hover(iflessonHover,iflessonOut);

});
