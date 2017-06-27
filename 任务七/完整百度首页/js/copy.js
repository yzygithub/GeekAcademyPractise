/**
 * Created by yzy on 2017/5/26.
 */

// https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/sbase_f1d73ac3.js
// https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/lib/jquery-1.10.2_d88366fd.js
// https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/min_super_af0391fe.js
// https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/tipsplus/js/min_tips_e4616384.js
// https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/activity/js/activity_start_52498d2c.js

window.sysTime = 1495784483;
_manCard = {
  asynJs: [],
  asynLoad: function (id) {
    _manCard.asynJs.push(id);
  }
};


(function () {
  var hashMatch = document.location.href.match(/#+(.*wd=[^&]+)/);
  if (hashMatch && hashMatch[0] && hashMatch[1]) {
    var css = 'body {display: none}',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
    location.href = "//" + location.host + "/s?" + hashMatch[1];
  }
})();


var s_domain = {
    "protocol": "https:",
    "staticUrl": "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/",
    "base": "home",
    "baseuri": "/home",
    "passconf": "http://passport.baidu.com/ubrwsbas",
    "logout": "https://passport.baidu.com/?logout&u=",
    "bs": "https://www.baidu.com",
    "login": "http://passport.baidu.com/?login&tpl=super&u=",
    "sp": "http://hi.baidu.com/",
    "ssllist": {
      "su.bdimg.com": "ss0.bdstatic.com\/5a21bjqh_Q23odCf",
      "1.ur.bdimg.com": "ss1.bdstatic.com\/k4oTfnSm1A5BphGlnYG",
      "2.ur.bdimg.com": "ss2.bdstatic.com\/kvoTfnSm1A5BphGlnYG",
      "3.ur.bdimg.com": "ss3.bdstatic.com\/kfoTfnSm1A5BphGlnYG",
      "4.ur.bdimg.com": "ss0.bdstatic.com\/lPoTfnSm1A5BphGlnYG",
      "5.ur.bdimg.com": "ss1.bdstatic.com\/l4oTfnSm1A5BphGlnYG",
      "6.ur.bdimg.com": "ss2.bdstatic.com\/lvoTfnSm1A5BphGlnYG",
      "7.ur.bdimg.com": "ss3.bdstatic.com\/lfoTfnSm1A5BphGlnYG",
      "8.ur.bdimg.com": "ss0.bdstatic.com\/iPoTfnSm1A5BphGlnYG",
      "dj0.baidu.com": "sp0.baidu.com\/-L-Wsjip0QIZ8tyhnq",
      "dj1.baidu.com": "sp1.baidu.com\/-L-Xsjip0QIZ8tyhnq",
      "dj2.baidu.com": "sp2.baidu.com\/-L-Ysjip0QIZ8tyhnq",
      "eclick.baidu.com": "sp3.baidu.com\/-0U_dTmfKgQFm2e88IuM_a",
      "a.hiphotos.baidu.com": "ss0.baidu.com\/94o3dSag_xI4khGko9WTAnF6hhy",
      "b.hiphotos.baidu.com": "ss1.baidu.com\/9vo3dSag_xI4khGko9WTAnF6hhy",
      "c.hiphotos.baidu.com": "ss3.baidu.com\/9fo3dSag_xI4khGko9WTAnF6hhy",
      "d.hiphotos.baidu.com": "ss0.baidu.com\/-Po3dSag_xI4khGko9WTAnF6hhy",
      "e.hiphotos.baidu.com": "ss1.baidu.com\/-4o3dSag_xI4khGko9WTAnF6hhy",
      "f.hiphotos.baidu.com": "ss2.baidu.com\/-vo3dSag_xI4khGko9WTAnF6hhy",
      "g.hiphotos.baidu.com": "ss3.baidu.com\/-fo3dSag_xI4khGko9WTAnF6hhy",
      "h.hiphotos.baidu.com": "ss0.baidu.com\/7Po3dSag_xI4khGko9WTAnF6hhy",
      "bdimg.share.baidu.com": "ss1.baidu.com\/9rA4cT8aBw9FktbgoI7O1ygwehsv",
      "s.share.baidu.com": "sp0.baidu.com\/5foZdDe71MgCo2Kml5_Y_D3",
      "s1.bdstatic.com": "ss1.bdstatic.com\/5eN1bjq8AAUYm2zgoY3K",
      "p2.youxi.bdimg.com": "ss2.bdstatic.com\/5OZ1hTW64A63otebn9fN2DJv",
      "youxi.baidu.com": "sp3.baidu.com\/y0kThD4a2gU2pMbgoY3K",
      "fm.baidu.com": "ss3.baidu.com\/-rd1bjeh1BF3odCf",
      "music.baidu.com": "ss2.baidu.com\/8_1ZdTna2gU2pMbgoY3K",
      "f3.baidu.com": "sp2.baidu.com\/-uV1bjeh1BF3odCf",
      "sclick.baidu.com": "sp0.baidu.com\/5bU_dTmfKgQFm2e88IuM_a",
      "1.su.bdimg.com": "ss0.bdstatic.com\/k4oZeXSm1A5BphGlnYG",
      "2.su.bdimg.com": "ss1.bdstatic.com\/kvoZeXSm1A5BphGlnYG",
      "3.su.bdimg.com": "ss2.bdstatic.com\/kfoZeXSm1A5BphGlnYG",
      "4.su.bdimg.com": "ss3.bdstatic.com\/lPoZeXSm1A5BphGlnYG",
      "5.su.bdimg.com": "ss0.bdstatic.com\/l4oZeXSm1A5BphGlnYG",
      "6.su.bdimg.com": "ss1.bdstatic.com\/lvoZeXSm1A5BphGlnYG",
      "7.su.bdimg.com": "ss2.bdstatic.com\/lfoZeXSm1A5BphGlnYG",
      "8.su.bdimg.com": "ss3.bdstatic.com\/iPoZeXSm1A5BphGlnYG",
      "nssug.baidu.com": "sp1.baidu.com\/8qUZeT8a2gU2pMbgoY3K",
      "up.photo.baidu.com": "sp0.baidu.com\/6_R1fD_bAAd3otqbppnN2DJv",
      "suggestion.baidu.com": "sp0.baidu.com\/5a1Fazu8AA54nxGko9WTAnF6hhy",
      "t10.baidu.com": "ss0.baidu.com\/6ONWsjip0QIZ8tyhnq",
      "t11.baidu.com": "ss1.baidu.com\/6ONXsjip0QIZ8tyhnq",
      "t12.baidu.com": "ss2.baidu.com\/6ONYsjip0QIZ8tyhnq",
      "play.baidu.com": "ss3.baidu.com\/5LgHhXSm2Q5IlBGlnYG",
      "olime.baidu.com": "sp0.baidu.com\/8bg4cTva2gU2pMbgoY3K",
      "i.baidu.com": "sp0.baidu.com\/74oIbT3kAMgDnd_",
      "c.baidu.com": "sp0.baidu.com\/9foIbT3kAMgDnd_",
      "b1.baidu.com": "ss1.baidu.com\/9uN1bjeh1BF3odCf",
      "nsclick.baidu.com": "sp1.baidu.com\/8qUJcD3n0sgCo2Kml5_Y_D3",
      "b1.bdstatic.com": "ss0.bdstatic.com\/9uN1bjq8AAUYm2zgoY3K",
      "i7.baidu.com": "ss0.baidu.com\/73F1bjeh1BF3odCf",
      "i8.baidu.com": "ss0.baidu.com\/73x1bjeh1BF3odCf",
      "i9.baidu.com": "ss0.baidu.com\/73t1bjeh1BF3odCf",
      "ecma.bdimg.com": "ss1.bdstatic.com\/-0U0bXSm1A5BphGlnYG",
      "tag.baidu.com": "sp1.baidu.com\/6LMFsjip0QIZ8tyhnq",
      "hw.baidu.com": "sp0.baidu.com\/7KF1bjeh1BF3odCf",
      "opendata.baidu.com": "sp0.baidu.com\/8aQDcjqpAAV3otqbppnN2DJv",
      "open.baidu.com": "ss1.baidu.com\/8aQDcnSm2Q5IlBGlnYG",
      "api.open.baidu.com": "sp0.baidu.com\/9_Q4sjW91Qh3otqbppnN2DJv",
      "xiaodu.baidu.com": "sp0.baidu.com\/yLsHczq6KgQFm2e88IuM_a",
      "s0.nuomi.bdimg.com": "ss1.bdstatic.com\/5eR1ciub_Q63otebn9fN2DJv",
      "s1.nuomi.bdimg.com": "ss0.baidu.com\/5eN1ciub_Q63otebn9fN2DJv",
      "s2.nuomi.bdimg.com": "ss2.bdstatic.com\/5eZ1ciub_Q63otebn9fN2DJv",
      "vse.baidu.com": "sp3.baidu.com\/6qUDsjip0QIZ8tyhnq",
      "himg.bdimg.com": "ss1.bdstatic.com\/7Ls0a8Sm1A5BphGlnYG",
      "ss.bdimg.com": "ss1.bdstatic.com\/5aV1bjqh_Q23odCf",
      "ecmb.bdimg.com": "ss0.bdstatic.com\/-0U0bnSm1A5BphGlnYG",
      "e.su.bdimg.com": "ss0.bdstatic.com\/-4oZeXSm1A5BphGlnYG",
      "sensearch.baidu.com": "sp1.baidu.com\/5b11fzupBgM18t7jm9iCKT-xh_",
      "sestat.baidu.com": "sp1.baidu.com\/5b1ZeDe5KgQFm2e88IuM_a",
      "cdn00.baidu-img.cn": "ss0.bdstatic.com\/9bA1vGba2gU2pMbfm9GUKT-w",
      "cdn01.baidu-img.cn": "ss0.bdstatic.com\/9bA1vGfa2gU2pMbfm9GUKT-w"
    }
  },
  s_session = {
    "logId": "4064792900",
    "sessionId": "14957844836260",
    "rids": ["9597427817069195349", "14775049603043534843", "12262225242691205170"],
    "seqId": "0xb808fa7000001c02",
    "debug": false,
    "portrait": "da64797a794a53d204",
    "portraitSkin2nd": "da64797a794a53d204",
    "userProp": {
      "sawVideoGuide": false,
      "navClean": true,
      "appOffline": false,
      "toResGuide": false,
      "editNavGuide": false,
      "backToIndexGuide": false,
      "customAddGuide": false,
      "customAddTipGuide": false,
      "resciteGuide": false,
      "resvideoGuide": true,
      "emptyNavGuide": false,
      "resreadGuide": true,
      "nplusGuide": false,
      "nplusToEditGuide": true,
      "nplusSortGuide": false,
      "nplusViewChoice": true,
      "nplusViewChoosed": false,
      "newResFuncGuide": false,
      "isNplus": false,
      "nplusExchangeGuide": false,
      "resGoodMusicGuide": false,
      "appendVideo": false,
      "resTiebaGuide": false,
      "isPhotoAlbum": false,
      "packRecGuide": true,
      "packAddMoreGuide": true,
      "searchAgroupGuide": false,
      "starSkinTips": false,
      "treasureTips": false
    },
    "userTips": {
      "rpUpdateGuide": false,
      "rpUpdatePack": true,
      "ncrGuide": false,
      "hideIndexLink": true,
      "ipadLastAccess": "pc",
      "navRecommendGuide": true,
      "bdKuaiJieGuide": false,
      "tbEncourageGuide": false,
      "commTab": true,
      "currentWebTab": "myweb",
      "rpShowNewNavGuide": false,
      "resFirstAddGuide": true,
      "navMywebTip": false,
      "blowBirthday": true,
      "packCloseGuide": true,
      "isNewVersion": true,
      "showFmSearchGuide": true,
      "tbEncourageEndGuide": true,
      "shopingBannerGuide": false,
      "shopingBirdGuide": true,
      "shopingBirdDailyGuide": true,
      "shopingDefaultGuide": false,
      "browserPluginGuide": false,
      "addFromPsGuide": false,
      "tiebaStarPkGuide": false,
      "isCustomDir": false,
      "customFirstGuide": false,
      "customSecondGuide": true,
      "customThirdGuide": false,
      "rpIndividualGuide": true,
      "rpIndividualContentGuide": true,
      "nplusClean": "1391268676",
      "nplusCleanKey": true,
      "recommendGuide": "1369453840",
      "addToBaiduSideGuide": true,
      "addToBaiduBannerGuide": false,
      "noManualNavsGuide": true,
      "msgVideoKey": false,
      "msgWeatherKey": true,
      "msgNbaKey": false,
      "msgLotteryKey": false,
      "msgStateKey": true,
      "msgModKey": true,
      "msgGuideKey": true,
      "msgFirstSeeKey": false,
      "msgHeadTipKey": true,
      "telephoneOpen": true,
      "telephoneNewYearGuide": true,
      "telephoneValentineGuide": true,
      "nplusViewNewThreshold": false,
      "emptyUserGuide": "8",
      "emptyHotNavsAdded": true,
      "newUserHotGuide": "1",
      "addLayerDelTip": false,
      "hotChangeTip": true,
      "autoClassifyGuide": false,
      "navClfTipAdd": false,
      "navClfTipEdit": false,
      "newWeatherUser": true,
      "newWeatherGuide": false,
      "navAddHighLightTip": false,
      "msgCslTipKey": true,
      "msgCslKey": false,
      "msgGuoanKey": false,
      "msgBCKey": false,
      "msgFocusKey": true,
      "msgLocalKey": true,
      "footStateKey": false,
      "msgSetTipKey": true,
      "tiebaLikeGuide": false,
      "msgAddFocusKey": true,
      "navNoClickClean": false,
      "emptyUserFirTime": false,
      "msgSnsTipKey": true,
      "topModKey": true,
      "msgGameKey": false,
      "msgGameCtrlKey": false,
      "skinGuide": false,
      "skinLogoGuide": true,
      "skinLogoBackGuide": true,
      "skinChangeToFes": false,
      "msgModuleTip": true,
      "skinUpdateGuide": true,
      "bxUrFirst": true,
      "treasureUserGuide": false,
      "skinLogoHasSkined": true,
      "msgWeiboRebindKey": false,
      "skinAjustGuide": false,
      "newsGuideTip": true,
      "isNavUsed": true,
      "navUsedTip": "1385978550",
      "navUsedUpdateTip": false,
      "navUsedDelTip": true,
      "skinNewPicGuide": "2",
      "newsIdioTip": true,
      "msgTagKey": true,
      "news2GuideTip": false,
      "weatherSetPolution": true,
      "weatherShowBear": true,
      "skinGuideShowType": "B",
      "skinLayerType": "A",
      "newsHalfVersion": false,
      "skinSingleColorTip": true,
      "definedGuideShowType": false,
      "skinBgAddTip": true,
      "travelBigGuide": false,
      "travelInsideGuide": true,
      "travelCutDownGuide": false,
      "isXman": true,
      "weatherShowWarning": true,
      "showAllTab": false,
      "nusedExtendTip": true,
      "firstDelAddedTip": true,
      "recNavTip": false,
      "nbaCardTip": true,
      "tripEntranceTip": true,
      "groupbuyCardTip": true,
      "xingzuoCardTip": true,
      "isLite": true,
      "commonNavClean": true,
      "soccerCardTip": true,
      "lotteryCardTip": false,
      "pageTutorialTip": true,
      "zeroOpacityGuide": true,
      "hasWeatherMod": true,
      "weatherTipGuide": true,
      "stockCardTip": true,
      "navResortTip": false,
      "mouseScrollGuide": true,
      "conRecommendTip": false,
      "conRecommendGuide": true,
      "treasureAlert": false,
      "huaGuide": true,
      "huaHasChance": true,
      "huaNewSkin": true,
      "huaShowNum": true,
      "gameCardTip": false,
      "rcmdCardUserType": "0",
      "rcmdCardHasData": false,
      "conNavTip": true,
      "conNavNewTip": true,
      "conNavCardTip": true,
      "navInproduct": false,
      "groupbuyTipShowFlag": true,
      "treasureRemind": true,
      "treakillAlert": false,
      "isReqSkinLottery": false,
      "starSkinLottery": true,
      "treaGroupbuy": false,
      "lastAddCardTime": "1495544980",
      "treasureTips": true,
      "starSkinTips": true,
      "navNsTipsStatus": "0",
      "conNSNavTip": true,
      "conNSNavCardTip": true,
      "asiaCupTabTip": false,
      "settingDragTips": false,
      "firstMahattan": false,
      "isNewTabSearch": false,
      "goddessLottery": true,
      "mineNavTips": false,
      "supermanGuide": false,
      "navQuanyiTip": true,
      "neverShowSkinTip": true,
      "delrecLayer": "2",
      "isFirstUseGameSkin": true,
      "randomSkin": false,
      "supermanNavGuide": false,
      "treaAB": false
    },
    "userAttr": Number("") || 0,
    "username": "yzyJS",
    "unametype": "2",
    "userIsSkined": "off",
    "userIsNewSkined": "off",
    "userSkinName": "",
    "userSkinOpacity": "40",
    "userSkinUrl": "",
    "userSkinLogo": "logo_white",
    "userSkinDefined": "on",
    "userLogoSrc": "https:\/\/ss0.bdstatic.com\/5aV1bjqh_Q23odCf\/static\/superman\/img\/logo\/bd_logo1_31bdc765.png",
    "userLogoIsFestival": "",
    "usertype": "10",
    "curmod": "2",
    "firstmod": "",
    "userFirst": "",
    "logoCode": false,
    "isFesLogo": false,
    "isHaveWrodLink": false,
    "userNavEmpty": "",
    "bgUNE": "",
    "isEmptyRpRec": "",
    "userBirthday": "",
    "yuce": "",
    "sid": "1446_21087_20240_22917_22160",
    "mSid": "",
    "sample_value": "",
    "strategy_hit": "0",
    "issync": "",
    "isdev": "",
    "isUsedNav": "",
    "isRewardBox": "",
    "isNewMsg": "",
    "load_module": {
      "type": ["weather"],
      "weatherID": ''
    },
    "modules": ["0"],
    "modules_load": ["0"],
    "isLiteVersion": "1",
    "crids": ""
  };


var bds = {
  se: {},
  su: {
    urdata: [],
    urSendClick: function () {
    },
    urStatic: "https://ss1.bdstatic.com/5aV1bjqh_Q23odCf"
  },
  util: {},
  use: {},
  comm: {
    domain: "",
    ubsurl: "",
    tn: "",
    queryEnc: "",
    queryId: "",
    inter: "",
    sugHost: "",
    query: "",
    qid: "",
    cid: "",
    sid: "",
    stoken: "",
    serverTime: "",
    user: "",
    username: "",
    loginAction: [],
    useFavo: "",
    pinyin: "",
    favoOn: "",
    curResultNum: "0",
    rightResultExist: false,
    protectNum: 0,
    zxlNum: 0,
    pageNum: 1,
    pageSize: 10,
    ishome: 1,
    newindex: 1
  }
};
var name, navigate, al_arr = [];
var selfOpen = window.open;
eval("var open = selfOpen;");
var isIE = navigator.userAgent.indexOf("MSIE") != -1 && !window.opera;
var E = bds.ecom = {};
bds.se.mon = {
  loadedItems: [],
  load: function () {
  },
  srvt: -1
};
try {
  bds.se.mon.srvt = parseInt(document.cookie.match(new RegExp("(^| )BDSVRTM=([^;]*)(;|$)"))[2]);
  document.cookie = "BDSVRTM=;expires=Sat, 01 Jan 2000 00:00:00 GMT"
} catch (e) {
}
var bdUser = bds.comm.user ? bds.comm.user : null,
  bdQuery = bds.comm.query,
  bdUseFavo = bds.comm.useFavo,
  bdFavoOn = bds.comm.favoOn,
  bdCid = bds.comm.cid,
  bdSid = bds.comm.sid,
  bdServerTime = bds.comm.serverTime,
  bdQid = bds.comm.queryId,
  bdstoken = bds.comm.stoken,
  login_success = [];


  
  (function () {
    window._sp_async = 1;
    window.__async_strategy = 2;
    bds.comm.indexSid = "1446_21087_20240_22917_22160";
    bds.comm.queryId = "b808fa7000001c02";
    bds.comm.pdc = 0;
    bds.comm.user = "yzyJS";
    bds.comm.username = bds.comm.user;
    bds.comm.personalData = {
      "sugSet": {
        "value": "1",
        "ErrMsg": "SUCCESS"
      },
      "sugStoreSet": {
        "value": "1",
        "ErrMsg": "SUCCESS"
      },
      "fullSkinName": {
        "value": "0",
        "ErrMsg": "SUCCESS"
      },
      "imeSwitch": {
        "value": "0",
        "ErrMsg": "SUCCESS"
      },
      "resultNum": {
        "value": "10",
        "ErrMsg": "SUCCESS"
      },
      "resultLang": {
        "value": "0",
        "ErrMsg": "SUCCESS"
      },
      "isSwitch": {
        "value": "1",
        "ErrMsg": "SUCCESS"
      },
      "skinOpen": {
        "value": "",
        "ErrMsg": "NOFOUND"
      },
      "isJumpHttps": {
        "value": "",
        "ErrMsg": "NOFOUND"
      },
      "duRobotState": {
        "value": "111",
        "ErrMsg": "SUCCESS"
      }
    };
    var index_content = $('#head');
    var index_foot = $('#ftCon');
    var index_css = $('#style_super_inline');
    var index_is_css = $('#s_is_index_css');
    var index_css_content = index_css.html();
    var index_u = $('#u_sp');
    var result_u = $('#u');
    window.index_links = [];
    var result_head = $("#head");
    window.index_on = function () {
      s_session.index_off = false;
    };
    window.index_off = function () {
      s_session.index_off = true;
      $(document.body).attr('link', '#0000cc');
      index_links = [];
      $("head").find("link").each(function () {
        index_links.push(this);
        $(this).remove();
      });
      index_css.remove();
      index_is_css.remove();
      $('#head_wrapper').css('width', '');
      $('#kw').css('font-family', '');
      $('head').append($.decodeHTML($('#s_index_off_css').html()));
      $('head').append($.decodeHTML($('#s_is_result_css').html()));
      $('.s-tips-skin').remove();
      $('.s-skin-container').remove();
      $('#s_mancard_newmusic').remove();
    };
  })();


bds.util.domain = (function () {
  var b = $.extend({}, s_domain.ssllist);
  $.each(b, function (d, f) {
    if (b[d].indexOf("https://") < 0) {
      b[d] = "https://" + b[d]
    }
  });
  var a = function (d) {
      if (s_domain.protocol == "http:") {
        return d
      }
      var e = /^(http[s]?:\/\/)?([^\/]+)(.*)/,
        f = d.match(e);
      d = b.hasOwnProperty(f[2]) && (b[f[2]] + f[3]) || d;
      return d
    },
    c = function (e, d) {
      b[e] = d
    };
  return {
    get: a,
    set: c
  }
})();
bds.comm.sugHost = bds.util.domain.get("http://suggestion.baidu.com/su");

var Cookie = {
  set: function (e, t, o, i, s, n) {
    document.cookie = e + "=" + (n ? t : escape(t)) + (s ? "; expires=" + s.toGMTString() : "") + (i ? "; path=" + i : "; path=/") + (o ? "; domain=" + o : "")
  },
  get: function (e, t) {
    var o = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
    return null != o ? unescape(o[2]) : t
  },
  clear: function (e, t, o) {
    this.get(e) && (document.cookie = e + "=" + (t ? "; path=" + t : "; path=/") + (o ? "; domain=" + o : "") + ";expires=Fri, 02-Jan-1970 00:00:00 GMT")
  }
};
!function () {
  function save(e) {
    var t = [];
    for (tmpName in options) options.hasOwnProperty(tmpName) && "duRobotState" !== tmpName && t.push('"' + tmpName + '":"' + options[tmpName] + '"');
    var o = "{" + t.join(",") + "}";
    bds.comm.personalData ? $.ajax({
      url: "//www.baidu.com/ups/submit/addtips/?product=ps&tips=" + encodeURIComponent(o) + "&_r=" + (new Date).getTime(),
      success: function () {
        writeCookie(), "function" == typeof e && e()
      }
    }) : (writeCookie(), "function" == typeof e && setTimeout(e, 0))
  }

  function set(e, t) {
    options[e] = t
  }

  function get(e) {
    return options[e]
  }

  function writeCookie() {
    if (options.hasOwnProperty("sugSet")) {
      var e = "0" == options.sugSet ? "0" : "3";
      clearCookie("sug"), Cookie.set("sug", e, document.domain, "/", expire30y)
    }
    if (options.hasOwnProperty("sugStoreSet")) {
      var e = 0 == options.sugStoreSet ? "0" : "1";
      clearCookie("sugstore"), Cookie.set("sugstore", e, document.domain, "/", expire30y)
    }
    if (options.hasOwnProperty("isSwitch")) {
      var t = {
          0: "2",
          1: "0",
          2: "1"
        },
        e = t[options.isSwitch];
      clearCookie("ORIGIN"), Cookie.set("ORIGIN", e, document.domain, "/", expire30y)
    }
    if (options.hasOwnProperty("imeSwitch")) {
      var e = options.imeSwitch;
      clearCookie("bdime"), Cookie.set("bdime", e, document.domain, "/", expire30y)
    }
  }

  function writeBAIDUID() {
    var e, t, o, i = Cookie.get("BAIDUID");
    /FG=(\d+)/.test(i) && (t = RegExp.$1), /SL=(\d+)/.test(i) && (o = RegExp.$1), /NR=(\d+)/.test(i) && (e = RegExp.$1), options.hasOwnProperty("resultNum") && (e = options.resultNum), options.hasOwnProperty("resultLang") && (o = options.resultLang), Cookie.set("BAIDUID", i.replace(/:.*$/, "") + ("undefined" != typeof o ? ":SL=" + o : "") + ("undefined" != typeof e ? ":NR=" + e : "") + ("undefined" != typeof t ? ":FG=" + t : ""), ".baidu.com", "/", expire30y, !0)
  }

  function clearCookie(e) {
    Cookie.clear(e, "/"), Cookie.clear(e, "/", document.domain), Cookie.clear(e, "/", "." + document.domain), Cookie.clear(e, "/", ".baidu.com")
  }

  function reset(e) {
    options = defaultOptions, save(e)
  }

  var defaultOptions = {
      sugSet: 1,
      sugStoreSet: 1,
      isSwitch: 1,
      isJumpHttps: 1,
      imeSwitch: 0,
      resultNum: 10,
      skinOpen: 1,
      resultLang: 0,
      duRobotState: "000"
    },
    options = {},
    tmpName, expire30y = new Date;
  expire30y.setTime(expire30y.getTime() + 94608e7);
  try {
    if (bds && bds.comm && bds.comm.personalData) {
      if ("string" == typeof bds.comm.personalData && (bds.comm.personalData = eval("(" + bds.comm.personalData + ")")), !bds.comm.personalData) return;
      for (tmpName in bds.comm.personalData) defaultOptions.hasOwnProperty(tmpName) && bds.comm.personalData.hasOwnProperty(tmpName) && "SUCCESS" == bds.comm.personalData[tmpName].ErrMsg && (options[tmpName] = bds.comm.personalData[tmpName].value)
    }
    try {
      parseInt(options.resultNum) || delete options.resultNum, parseInt(options.resultLang) || "0" == options.resultLang || delete options.resultLang
    } catch (e) {
    }
    writeCookie(), "sugSet" in options || (options.sugSet = 3 != Cookie.get("sug", 3) ? 0 : 1), "sugStoreSet" in options || (options.sugStoreSet = Cookie.get("sugstore", 0));
    var BAIDUID = Cookie.get("BAIDUID");
    "resultNum" in options || (options.resultNum = /NR=(\d+)/.test(BAIDUID) && RegExp.$1 ? parseInt(RegExp.$1) : 10), "resultLang" in options || (options.resultLang = /SL=(\d+)/.test(BAIDUID) && RegExp.$1 ? parseInt(RegExp.$1) : 0), "isSwitch" in options || (options.isSwitch = 2 == Cookie.get("ORIGIN", 0) ? 0 : 1 == Cookie.get("ORIGIN", 0) ? 2 : 1), "imeSwitch" in options || (options.imeSwitch = Cookie.get("bdime", 0))
  } catch (e) {
  }
  window.UPS = {
    writeBAIDUID: writeBAIDUID,
    reset: reset,
    get: get,
    set: set,
    save: save
  }
}(),
  function () {
    var e = "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/every_cookie_a70bc15.js";
    ("Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform) && (e = "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/every_cookie_mac_82990d4.js"), setTimeout(function () {
      $.ajax({
        url: e,
        cache: !0,
        dataType: "script"
      })
    }, 0);
    var t = navigator && navigator.userAgent ? navigator.userAgent : "",
      o = document && document.cookie ? document.cookie : "",
      i = !!(t.match(/(msie [2-8])/i) || t.match(/windows.*safari/i) && !t.match(/chrome/i) || t.match(/(linux.*firefox)/i) || t.match(/Chrome\/29/i) || t.match(/mac os x.*firefox/i) || o.match(/\bISSW=1/) || 0 == UPS.get("isSwitch"));
    bds && bds.comm && (bds.comm.supportis = !i, bds.comm.isui = !0), window.__restart_confirm_timeout = !0, window.__confirm_timeout = 8e3, window.__disable_is_guide = !0, window.__disable_swap_to_empty = !0, window.__switch_add_mask = !0;
    var s = "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/js/all_async_search_a2c362b.js",
      n = "/script";
    document.write("<script src='" + s + "'><" + n + ">"), bds.comm.newindex && $(window).on("index_off", function () {
      $('<div class="c-tips-container" id="c-tips-container"></div>').insertAfter("#wrapper"), window.__sample_dynamic_tab && $("#s_tab").remove()
    }), bds.comm && bds.comm.ishome && Cookie.get("H_PS_PSSID") && (bds.comm.indexSid = Cookie.get("H_PS_PSSID"))
  }();


if (typeof initPreload == "function") {
  initPreload({
    'index_form': "#form",
    'index_kw': "#kw",
    'result_form': "#form",
    'result_kw': '#kw',
    'isui': true
  });
} else {
  window._sp_async = undefined;
  new Image().src = "/home/page/data/pageserver?errno=7004&_t" + new Date() * 1;
}



  F._setMod("superui");
F._fileMap({
  "/js/ubase_d1f77074.js": ["superui", "util/tool", "util/emitter", "util/dot", "util/smDot", "component", "component/draggable", "component/scrollbar", "component/dialog", "component/tips", "component/share", "component/share2", "component/notify", "component/suggestion", "component/placeholder"],
  "/js/ubase_unused_b4f3700e.js": ["component/draggsort", "component/draggselect", "component/draggdirs"],
  "/css/ubase_83c8f0ba.css": ["superui.css", "dialog.css", "tips.css", "share.css", "scrollbar.css", "suggestion.css"],
  "/css/ubase_sync_ac0620ef.css": ["scrollbar_sync.css"],
  "/js/utils_718740fc.js": ["util/pubsub"]
});


  F._setMod("superman");
F._fileMap({
  "/js/sbase_f1d73ac3.js": ["plugin/browser", "plugin/strpx", "plugin/url", "plugin/ajax", "plugin/stringify", "plugin/load_file", "plugin/string", "plugin/localstorage", "plugin/fn", "plugin/easing", "plugin/mousewheel", "plugin/cookie", "lib/base", "lib/sbase", "lib/class", "lib/mod_evt", "lib/log", "common/user_attr", "common/select", "lib/thunder"],
  "/js/min_super_a3213924.js": ["common/result_page", "common/image_lazy_load", "log/super_all", "lib/xpath_log", "lib/carditem_log", "ps/log", "ps/sindex", "ps/sug", "ps/fpid", "page/analyse", "start/super_start", "page/info", "page/scroll", "guide/superman_guide"],
  "/js/supermin_080f4953.js": ["lib/base", "lib/sbase", "lib/log", "lib/class", "lib/mod_evt", "plugin/browser", "plugin/url", "config", "log/super_all", "ps/supermin_log", "ps/s_supermin", "ps/sug", "page/info", "start/supermin_start"],
  "/js/super_ext_c7d11960.js": ["plugin/mousewheel", "weather/setting_refresh", "weather/setting_ctrl", "weather/setting_view", "weather/weather_city"],
  "/css/super_ext_c02dfc40.css": ["weather_setting.css", "new_card_tip.css", "mngr_quit_guid.css", "wenjuan_tip.css"],
  "/css/super_min_991a44a3.css": ["super_init.css", "weather.css", "top_menu.css", "skin.css", "super_skin.css", "select.css", "index_guide.css"],
  "/js/super_load_b036bf97.js": ["weather/weather_tpl", "weather/weather_ctrl", "weather/weather_autorefresh", "start/skin_start", "skin/skin_rewrite", "mngr/top_layer", "mngr/top_menunav", "mngr/top_menu", "common/guide_tip", "guide/groupbuy_tip", "guide/new_card_tip", "guide/wenjuan_tip", "page/page_exp"],
  "/js/skin_layer_2e4d92a0.js": ["skin/skin_init", "skin/skin_cut_img", "skin/skin_model", "skin/skin_nav", "skin/skin_page", "skin/skin_tools", "skin/skin_img", "skin/skin_control", "skin/skin_view", "skin/skin_upload_flash", "skin/skin_setting", "skin/skin_preview", "skin/skin_defined", "skin/skin_opacity", "skin/skin_ajax", "skin/skin_extra", "skin/skin_random", "skin/skin_cartoonExtra"],
  "/js/opacity_mod_a6564360.js": ["opacity/opacity_tpl", "opacity/opacity_action", "opacity/opacity_conf"],
  "/css/skin_layer_9fb33074.css": ["skin_layer.css", "skin_lottery.css"],
  "/css/guidetip_495aff91.css": ["guide.css"],
  "/css/nsguide_a8cbc2e7.css": ["ns_guide.css"],
  "/js/min_setting_78aa8230.js": ["setting/setting_constructor", "start/setting_start", "setting/mod_drag", "setting/setting_action"],
  "/css/setting_min_ec874049.css": ["setting.css"],
  "/js/card_setting_min_ec2809fd.js": ["setting/card_setting"],
  "/css/card_setting_8120a63e.css": ["card_setting.css"],
  "/css/page_setting_fe314bf0.css": ["super_setting.css", "select.css", "setting_msg.css", "setting_yaohao.css", "pop.css", "dialog.css"],
  "/js/page_setting_23c02a14.js": ["config", "log/super_all", "setting/page_setting", "setting/tab_msg", "start/page_setting_start", "common/pop", "setting/yaohao", "msg/const", "setting/data_adapter", "msg/bind", "msg/bind_window", "setting/common_setting"],
  "/css/mt_min_d0e7c6d2.css": ["mt_mod.css", "index_msg.css"],
  "/js/min_mt_eb8a5386.js": ["msg/const", "msg/data_server", "msg/data_adapter"],
  "/js/mt_ext_9edb5d91.js": ["msg/index_nav_msg_extend", "msg/msg_builder", "msg/bind", "msg/bind_window"],
  "/js/min_notice_b86f6d56.js": ["mt/mt_show", "mt/mt_msg_constructor"],
  "/js/notice_ext_0eb3b016.js": ["mt/mt_ext", "mt/mt_msg_item", "mt/mt_msg_operate"],
  "/js/guide_ie_64f5d7fa.js": ["guide/main_guide_ie"],
  "/js/guide_0e2078d4.js": ["guide/main_guide", "guide/navns_guide", "guide/conrecommend_guide"]
});
window._xman_speed = window._xman_speed || {};
F._setContext({
  base: "lib/sbase"
});
F.use("lib/mod_evt", function (a) {
  F._setContextMethod("fire", function (c, b) {
    return a.fire(this.svnMod + ":" + this.modName, c, b)
  });
  F._setContextMethod("listen", function (f, g, d) {
    var e = Object.prototype.toString.call(f);
    if (e == "[object String]") {
      if (f.indexOf(":") < 0) {
        f = this.svnMod + ":" + f
      }
    } else {
      if (e == "[object Array]") {
        for (var c = 0, b = f.length; c < b; c++) {
          if (f[c].indexOf(":") < 0) {
            f[c] = this.svnMod + ":" + f[c]
          }
        }
      }
    }
    a.on(f, g, d)
  });
  F._setContextMethod("unListen", function (c, d, b) {
    a.un(this.svnMod + ":" + this.modName, d, b)
  })
});
F._loadScriptTimeout = 15000;
F._useConfig = true;
F._firstScreenCSS = F._firstScreenCSS || [];
F._firstScreenCSS.push("/css/super_min_991a44a3.css");
F._firstScreenJS = F._firstScreenJS || [];
F._firstScreenJS.push("/js/min_super_a3213924.js");

  
  setTimeout(function () {
    if (document.getElementById("s_main").offsetWidth == 0 && typeof(F) == 'undefined') {
      new Image().src = s_domain.baseuri + '/page/data/pageserver?errno=2015&msg=cdn_failed'
    }
  }, 2000);
if (typeof ns_c == "undefined") {
  var ns_c = function () {
  }
}
