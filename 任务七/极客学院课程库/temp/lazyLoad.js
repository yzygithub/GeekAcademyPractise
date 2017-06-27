// lessonlist_6d12115.js
require("common:widget/pager/jquery.pager.js");
var protocol = "https:" == document.location.protocol ? "https://" : "http://",
    pagecount, totalcount, pagenumber, lessonlist = {
        init: function() {
            this.changeStyle(), this.tagtype(), this.askSuggest(), this.insert(), this.wikiloadonw(), this.videoDownload()
        },
        wikiloadonw: function() {
            $(".weibox").parent().hover(function() {
                $(this).children(".weibox").height("auto")
            }, function() {
                $(this).children(".weibox").height(0)
            })
        },
        insert: function() {
            function e(e) {
                if ("object" == typeof e) {
                    var i = '<li class="cf">';
                    i += '<div class="lessonimg-box">';
                    var t;
                    return t = void 0 != e && void 0 != e.user && "" != e.user.detail && "" != e.user.detail.domain ? e.user.detail.domain : e.user.detail.uuid, i += void 0 != e && void 0 != e.user && "" != e.user.pic ? '<a href="' + protocol + "my.jikexueyuan.com/" + t + '/"><img src="' + e.user.pic + '" class="lessonimg"></a>' : '<a href="' + protocol + "my.jikexueyuan.com/" + t + '/"><img src="' + s + '" class="lessonimg"></a>', i += "</div>", i += '<div class="lesson-infor"><h2><a href="' + protocol + "wenda.jikexueyuan.com/question/" + e.id + '/" target="_blank" jktag="&posGP=104001&posArea=0004&posOper=8016&posColumn=' + e.id + ".0&aQId=" + e.id + '">' + e.title + "</a>", i += "</h2>", i += '<div class="timeandicon">', i += '<div class="cf">', i += "<dl>", i += "" != e.user && void 0 != e.user.uname ? '<dd class="mar-b8"><a style="color:#333" href="' + protocol + "my.jikexueyuan.com/" + t + '/">' + e.user.uname + "</dd></a>" : '<dd class="mar-b8"> </dd>', "" != e.last_replyed_at && "0000-00-00 00:00:00" != e.last_replyed_at && (i += '<dd class="zhongji"> 最后回答：<span>' + e.last_replyed_at + "</span></dd>"), i += '</dl></div><div class="ask-text"><p>' + e.content + "</p></div></div></div>", i += e.replies_count > 0 ? '<div class="lesson-number f_r"><span class="blue-color">' + e.replies_count + "</span> <p>讨论中</p></div>" : '<div class="lesson-number f_r"><span>' + e.replies_count + "</span><p>暂无回复</p></div></li>"
                }
            }

            var s = "https://s1.jikexueyuan.com/course/images/default_df58664.gif",
                i = !0;
            1 == i && $("#qa_subask_submit").click(function() {
                function s() {
                    $("#qa_subask_submit").html("发布问题").attr("stop", "0").removeClass("stopbtn")
                }

                function t() {
                    $("#qa_subask_submit").html("问题提交中…… ").attr("stop", "1").addClass("stopbtn")
                }

                if (0 == i) return !1;
                var a = $("#qa_sub_title").val(),
                    o = $("#editor").val(),
                    l = $(".player-video").attr("course_id"),
                    n = $(".player-video").attr("seq"),
                    r = $("input[name='qalevel']:checked").val(),
                    c = $("input[name='send_email']").prop("checked");
                if (1 == c) var c = 1;
                else var c = 0;
                var d = ($("#qa_subask").find("input[name=safecode]").val(), $("input[name='_csrf']").val());
                if ("" == $.trim(a)) return JKXY.msgBox(1, "请输入提问标题"), !1;
                if ("" == $.trim(o)) return JKXY.msgBox(1, "请输入提问内容"), !1;
                if ("" != $.trim(o)) {
                    if (1 == parseInt($("#qa_subask_submit").attr("stop"))) return !1;
                    t(), i = !1;
                    var u = {
                        title: encodeURIComponent(a),
                        content: encodeURIComponent(o),
                        course_id: l,
                        seq: n,
                        qalevel: r,
                        send_email: c,
                        _csrf: d
                    };
                    return $.ajax({
                        type: "post",
                        url: "/course/insert/content",
                        data: u,
                        dataType: "json",
                        success: function(t) {
                            s(), $("#qa_subask").find("input[name=safecode]").val(), "200" == t.code ? (JKXY.msgBox(1, "问题提交成功 ：）", 1500, function() {
                                i = !0
                            }), $("#editor").val(""), $("#qa_sub_title").val(""), $("#pop-tow").fadeOut(), $("#blacklayer").remove(), $("#course_question_list").prepend(e(t.data)), videojs("play_video").play()) : JKXY.msgBox(1, t.msg, 1500, function() {
                                i = !1
                            })
                        },
                        complete: function() {
                            s()
                        }
                    }), !1
                }
            })
        },
        askSuggest: function() {
            function e(e) {
                var s = '<li class="cf"><div class="left-text"><p><a href="/question/' + e.id + '.html" target="_blank" style="color:#333;">' + e.title + "</a></p>";
                return s += "" != e.user && void 0 != e.user.uname ? " <div><span>" + e.user.uname + "</span> <span>最后回答：<em>" + e.last_replyed_at + "</em></span></div>" : " <div><span>" + e.user.uname + "</span> <span>最后回答：<em>" + e.last_replyed_at + "</em></span></div>", s += e.replies_count > 0 ? '</div><div class="tl-number"><em class="red-color">' + e.replies_count + "</em><span>讨论中</span></div></li>" : '</div><div class="tl-number"><em class="gray-color">' + e.replies_count + "</em><span>暂无回复</span></div></li>"
            }

            $(document).ready(function() {
                $(".one-input").keyup(function() {
                    var s = encodeURI($(".one-input").val()),
                        i = $(".player-video").attr("course_id"),
                        t = { keyword: s, course_id: i };
                    $.ajax({
                        url: "/course/suggest/add",
                        type: "get",
                        data: t,
                        dataType: "json",
                        success: function(s) {
                            if (200 == s.code) {
                                var i = "";
                                $("#returnQaTopics").empty();
                                for (var t in s.data) i = e(s.data[t]), $("#returnQaTopics").append(i)
                            } else $("#returnQaTopics").html("没有匹配的问题，请直接填写问题详细描述")
                        }
                    })
                })
            })
        },
        asklistPage: function(e, s, i) {
            function t(e) {
                $("#course_question_list").empty(), lessonlist.asklist(e)
            }

            $("#page-nav").pager({ pagenumber: e, pagecount: s, totalcount: i, buttonClickCallback: t })
        },
        asklist: function(e) {
            function s(e) {
                function s(e) {
                    var s = '<li class="cf">';
                    s += '<div class="lessonimg-box">';
                    var i;
                    return i = void 0 != e && void 0 != e.user && "" != e.user.detail && "" != e.user.detail.domain ? e.user.detail.domain : e.user.detail.uuid, s += void 0 != e && void 0 != e.user && "" != e.user.pic ? '<a href="' + protocol + "my.jikexueyuan.com/" + i + '/"><img src="' + e.user.pic + '" class="lessonimg"></a>' : '<a href="' + protocol + "my.jikexueyuan.com/" + i + '/"><img src="' + o + '" class="lessonimg"></a>', s += "</div>", s += '<div class="lesson-infor"><h2><a href="' + protocol + "wenda.jikexueyuan.com/question/" + e.id + '/" target="_blank" jktag="&posGP=104001&posArea=0004&posOper=8016&posColumn=' + e.id + ".0&aQId=" + e.id + '">' + e.title + "</a>", s += "</h2>", s += '<div class="timeandicon">', s += '<div class="cf">', s += "<dl>", "" != e.user && void 0 != e.user.uname && (s += '<dd class="mar-b8"><a style="color:#333" href="' + protocol + "my.jikexueyuan.com/" + i + '/">' + e.user.uname + "</dd></a>"), "" != e.last_replyed_at && "0000-00-00 00:00:00" != e.last_replyed_at && (s += '<dd class="zhongji"> 最后回答：<span>' + e.last_replyed_at + "</span></dd>"), s += '</dl></div><div class="ask-text"><p>' + e.content + "</p></div></div></div>", s += e.replies_count > 0 ? '<div class="lesson-number f_r"><span class="blue-color">' + e.replies_count + "</span> <p>讨论中</p></div>" : '<div class="lesson-number f_r"><span>' + e.replies_count + "</span><p>暂无回复</p></div></li>"
                }

                var i = e.page,
                    t = e.total_pages,
                    a = e.page_items,
                    o = "https://s1.jikexueyuan.com/course/images/default_df58664.gif";
                lessonlist.asklistPage(i, t, a);
                for (var l = 0; l < e.lists.length; l++) $("#course_question_list").append(s(e.lists[l]))
            }

            var i = e || 1,
                t = $(".videobox").attr("course_id"),
                a = $(".videobox").attr("seq") || 1,
                o = { course_id: t, seq: a, page: i, per_page: 5 };
            $.ajax({
                type: "get",
                url: "/course/ask",
                data: o,
                dataType: "json",
                timeout: 5e3,
                success: function(e) {
                    "200" == e.code && s(e.data)
                }
            })
        },
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
        videoDownload: function() {},
        changeStyle: function() {
            $(".kuai-icon").unbind(), $(".kuai-icon").bind("click", function() {
                $.cookie("tag", "lesson-list");
                JKXY.Cookie.get("tag");
                $(".zhongji").hide(), $(".learn-number").hide(), $(".zhongji").hide(), JK_lock = "open", $("#changeid").removeClass("lesson-list2").addClass("lesson-list"), $(".list-icon").removeClass("curr"), $(this).addClass("curr");
                var e = $(".lesson-list p");
                e.height(0), e.hide(), $(".lesson-list li").hover(lessonlist.lessonHover, lessonlist.lessonOut)
            }), $(".list-icon").unbind(), $(".list-icon").bind("click", function() {
                $.cookie("tag", "lesson-list2");
                JKXY.Cookie.get("tag");
                JK_lock = "close";
                var e = $(".lesson-list p");
                e.show(), $(".learn-number").show(), $(".zhongji").show(), e.height(36), $("#changeid").removeClass("lesson-list").addClass("lesson-list2"), $(".kuai-icon").removeClass("curr"), $(this).addClass("curr")
            })
        },
        getArgs: function(e) {
            var s, i = new Object;
            s = 2 == arguments.length ? arguments[1] : location.search.substring(1);
            for (var t = s.split("&"), a = 0; a < t.length; a++) {
                var o = t[a].indexOf("=");
                if (-1 != o) {
                    var l = t[a].substring(0, o),
                        n = t[a].substring(o + 1);
                    n = decodeURIComponent(n), i[l] = n
                }
            }
            return i[e]
        },
        chooseType: function() {
            function e(e) {
                var t = e.data.key,
                    a = e.data.val;
                s[t] = a;
                var o;
                if (3 == i.split("/").length) o = "/" + i.split("/")[1] + "/all/";
                else if (4 == i.split("/").length) o = window.location.pathname;
                else if (5 == i.split("/").length) {
                    var l = window.location.pathname;
                    l.split("/"), o = "/" + i.split("/")[1] + "/" + i.split("/")[2] + "/"
                }
                document.location.href = o + s[0] + "-" + s[1] + "-" + s[2] + "/"
            }

            var s, i = window.location.pathname;
            switch (i.split("/").length <= 4 ? s = ["0", "0", "0"] : 5 == i.split("/").length && (s = i.split("/")[3].split("-")), s[0]) {
                case "1":
                    $(".type-title-one").html("最新");
                    break;
                case "2":
                    $(".type-title-one").html("最热")
            }
            switch (s[1]) {
                case "1":
                    $(".type-title-tow").html("知识精讲");
                    break;
                case "2":
                    $(".type-title-tow").html("项目实战")
            }
            switch (s[2]) {
                case "1":
                    $(".type-title-three").html("初级");
                    break;
                case "3":
                    $(".type-title-three").html("中级");
                    break;
                case "5":
                    $(".type-title-three").html("高级");
                    break;
                case "0":
                    $(".type-title-three").html("全部")
            }
            $(".lesson-new").bind("click", { val: "1", key: "0" }, e), $(".lesson-hot").bind("click", {
                val: "2",
                key: "0"
            }, e), $(".lesson-detailed").bind("click", { val: "1", key: "1" }, e), $(".lesson-object").bind("click", {
                val: "3",
                key: "1"
            }, e), $(".lesson-all").bind("click", { val: "0", key: "1" }, e), $(".level-one").bind("click", {
                val: "1",
                key: "2"
            }, e), $(".level-tow").bind("click", { val: "3", key: "2" }, e), $(".level-three").bind("click", {
                val: "5",
                key: "2"
            }, e), $(".level-all").bind("click", { val: "0", key: "2" }, e)
        }
    };
$(function() {
    lessonlist.init()
});


// jquery.pager_c1811c8.js
define("common:widget/pager/jquery.pager.js", function() {
    ! function(e) {
        function a(a, p, i) {
            var o = e('<ul class="pages"></ul>');
            o.append(n("首页", a, p, i)).append(n("上一页", a, p, i));
            var s = 1,
                l = 7,
                r = "<li class='thpoint'>...</li>";
            a > 4 && (s = a - 3, l = a + 3), l > p && (s = p - 6, l = p, r = ""), 1 > s && (s = 1);
            for (var c = s; l >= c; c++) {
                var u = e('<li class="page-number">' + c + "</li>");
                c == a ? u.addClass("pgCurrent") : u.click(function() {
                    i(this.firstChild.data)
                }), u.appendTo(o)
            }
            o.append(r).append(n("下一页", a, p, i)).append(n("末页", a, p, i)), o.append("<li class='thpoint pagetotal' style='margin-top:3px;'>共 " + p + " 页</li>");
            var d = e("<li class='thpoint pagenow'>当前<input type='text' value='" + a + "'maxlength='6' id='gotoval' style='width:20px; height:16px;margin-top:-3px;padding-top:2px;padding-left:10px;'/>页</li>");
            return o.append(d), o.append(t("确定", p, i)), o
        }

        function t(a, t, n) {
            var p = e('<li class="pgNext go">' + a + "</li>");
            return p.click(function() {
                var a = e("#gotoval").val(),
                    p = parseInt(a),
                    i = /^[1-9]*[1-9][0-9]*$/;
                return i.exec(p) ? p > t ? void JKXY.msgBox(0, "您输入的页面超过总页数" + t) : void n(p) : (JKXY.msgBox(0, "请输入非零的正整数！"), !1)
            }), p
        }

        function n(a, t, n, p) {
            var i = e('<li class="pgNext">' + a + "</li>"),
                o = 1;
            switch (a) {
                case "首页":
                    o = 1;
                    break;
                case "上一页":
                    o = t - 1;
                    break;
                case "下一页":
                    o = t + 1;
                    break;
                case "末页":
                    o = n
            }
            return "首页" == a || "上一页" == a ? 1 >= t ? i.addClass("pgEmpty") : i.click(function() {
                p(o)
            }) : t >= n ? i.addClass("pgEmpty") : i.click(function() {
                p(o)
            }), i
        }

        e.fn.pager = function(t) {
            e.extend({}, e.fn.pager.defaults, t);
            return this.each(function() {
                e(this).empty().append(a(parseInt(t.pagenumber), parseInt(t.pagecount), t.buttonClickCallback)), e(".pages li").mouseover(function() {
                    document.body.style.cursor = "pointer"
                }).mouseout(function() {
                    document.body.style.cursor = "auto"
                })
            })
        }, e.fn.pager.defaults = { pagenumber: 1, pagecount: 1 }
    }(jQuery)
});

// PagerDemo_e88048d.js
define("common:widget/pager/PagerDemo.js", function(e, a, n) {
    e("common:widget/pager/jquery.pager.js");
    var o = {
        init: function(e, a, n) {
            o.page(e, a, n)
        },
        page: function(e, a, n) {
            $("#page-nav").pager({ pagenumber: e, pagecount: a, totalcount: n, buttonClickCallback: o.PageClick })
        },
        PageClick: function(e) {
            var a = window.location.pathname;
            document.location.href = a + "?pageNum=" + e
        }
    };
    n.exports = o
});

//loading_197f16e.js
define("common:widget/loading/loading.js", function(n, o, i) {
    var e = {
        init: function() {
            $(".lesson_loading").remove()
        }
    };
    i.exports = e
});
