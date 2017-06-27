/**
 * Created by yzy on 2017/5/28.
 */
var protocol = "https:" == document.location.protocol ? "https://" : "http://",
  lessonlist = {
    //加载方法（函数）
    init: function() {
      this.changeStyle(), this.tagtype(), this.askSuggest()
    },
    //保存当前tagtype
    tagtype: function() {
      var e = $.cookie("tag");
      if ("lesson-list2" != e) {
        $(".laddingicon-box").remove(), $(".noshow").show(), $(".zhongji").hide(), $(".learn-number").hide(), $("#changeid").removeClass("lesson-list2").addClass("lesson-list"), $(".kuai-icon").addClass("curr"), $(".list-icon").removeClass("curr");
        var s = $(".lesson-list p");
        s.height(0), $(".lesson-list li").hover(lessonlist.lessonHover, lessonlist.lessonOut), $("#changeid").show()
      } else if ("lesson-list2" == e) {
        JK_lock = "close";
        var s = $(".lesson-list p");
        $(".noshow").show(), $(".learn-number").show(), $(".zhongji").show(), s.height(36).show(), $("#changeid").removeClass("lesson-list").addClass("lesson-list2"), $(".laddingicon-box").remove(), $(".kuai-icon").removeClass("curr"), $(".list-icon").addClass("curr"), $("#changeid").show()
      }
    },
    changeStyle: function() {
      $(".kuai-icon").unbind(), $(".kuai-icon").bind("click", function() {
        $.cookie("tag", "lesson-list");
        JKXY.Cookie.get("tag");
        $(".zhongji").hide(), $(".learn-number").hide(), JK_lock = "open", $("#changeid").removeClass("lesson-list2").addClass("lesson-list"), $(".list-icon").removeClass("curr"), $(this).addClass("curr");
        var e = $(".lesson-list p");
        e.height(0), e.hide(), $(".lesson-list li").hover(lessonlist.lessonHover, lessonlist.lessonOut)
      }),
        $(".list-icon").unbind(), $(".list-icon").bind("click", function() {
        $.cookie("tag", "lesson-list2");
        JKXY.Cookie.get("tag");
        JK_lock = "close";
        var e = $(".lesson-list p");
        e.show(), $(".learn-number").show(), $(".zhongji").show(), e.height(36), $("#changeid").removeClass("lesson-list").addClass("lesson-list2"), $(".kuai-icon").removeClass("curr"), $(this).addClass("curr")
      })
    }
  };
$(function() {
  lessonlist.init()
});