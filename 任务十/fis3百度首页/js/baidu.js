/**
 * Created by yzy on 2017/5/26.
 */
//ready html骨架准备完成
$(document).ready(function () {
//      更多产品
  $('#mrpdt').mouseenter(function () {
//        console.log('hover')
    $('.bdbriimg').fadeIn(200);
//				$('.bdbriimg').css('display','block');
  }).mouseleave(function () {
//        console.log('unhover')
    $('.bdbriimg').fadeOut(200);
//        $('.bdbriimg').css('display','none');
  });
//      账号登录
  $('#user').mouseenter(function () {
//        console.log('hover');
    $('#s_user_name_menu').css('display','block');
  }).mouseleave(function () {
//        console.log('leave');
    $('#s_user_name_menu').css('display','none');
  });
//      设置
  $('#setting').mouseenter(function () {
//        console.log('hover');
    $('#s_user_setting_menu').css('display','block');
  }).mouseleave(function () {
//        console.log('leave');
    $('#s_user_setting_menu').css('display','none');
  });
  $('#switch_skin').click(function () {
    $('#s_skin_layer').slideDown(500);
  });
  $('#pack_up').click(function () {
    $('#s_skin_layer').slideUp(500);
  });
//  显示天气
  var s_mod_setweather=$('#s_mod_setweather');
  $('#s_weather_wrapper').hover(
    function () {
      s_mod_setweather.fadeIn();
      // s_mod_setweather.delay('slow').addClass('show');
      // s_mod_setweather.delay('slow').removeClass('hide');
    },
    function () {
      s_mod_setweather.fadeOut();
      // s_mod_setweather.delay('slow').addClass('hide');
      // s_mod_setweather.delay('slow').removeClass('show');
    }
  );
  s_mod_setweather.hover(
    function () {
      s_mod_setweather.show();
    },
    function () {
      s_mod_setweather.fadeOut();
    }
  );
//  显示天气 end
//  设置hover
  $('.lunar-setting-btn').hover(
    function () {
      $(this).addClass('hover-setting-btn');
    },
    function () {
      $(this).removeClass('hover-setting-btn');
    }
  );
//  setweather-setting 显示
  var setweather_setting = $('.setweather-setting');
  var setweather_content = $('.setweather-content');
  $('.lunar-setting-btn').click(
    function () {
      setweather_setting.css('display','block');
      setweather_content.css('display','none');
    }
  );
  $('.setting-save').click(function () {
    setweather_setting.css('display','none');
    setweather_content.css('display','block');
  });
  $('.setting-cancel').click(function () {
    setweather_setting.css('display','none');
    setweather_content.css('display','block');
  });
//  切换tab
//  点击我的关注
  $('#s_menu_mine').click(function () {
    // console.log('s_menu_mine');
    $('.current').removeClass('current');
    $(this).addClass('current');
    $('.current-content').removeClass('current-content');
    $('#s_content_100').addClass('current-content');
  });
//  点击推荐
  $('#recommend').click(function () {
    // console.log('recommend');
    $('.current').removeClass('current');
    $(this).addClass('current');
    $('.current-content').removeClass('current-content');
    $('#s_content_2').addClass('current-content');});
//  点击导航
  $('#navigator').click(function () {
    // console.log('navigator');
    $('.current').removeClass('current');
    $(this).addClass('current');
    $('.current-content').removeClass('current-content');
    $('#s_content_1').addClass('current-content');});
//  点击视频
  $('#video').click(function () {
    // console.log('video');
    $('.current').removeClass('current');
    $(this).addClass('current');
    $('.current-content').removeClass('current-content');
    $('#s_content_15').addClass('current-content');});
//  切换tab end
});

function switchColor(color) {//切换背景颜色
  var pc_wrapper=document.getElementById('pc_wrapper');
  var logoImg=document.getElementById('logoImg');
  switch(color)
  {
    case 'feffc6':
      pc_wrapper.style.background='url(img/background.jpg)';//切换背景
      logoImg.setAttribute('src','img/logo_white.png');//切换logo
      break;
    case 'c6fffe':
      pc_wrapper.style.background='#c6fffe';
      logoImg.setAttribute('src','img/logo_white.png');
      break;
    case 'ffc9c6':
      pc_wrapper.style.background='#ffc9c6';
      logoImg.setAttribute('src','img/logo_white.png');
      break;
    case '508b7d':
      pc_wrapper.style.background='#508b7d';
      logoImg.setAttribute('src','img/logo_white.png');
      break;
    case '7BC7FF':
      pc_wrapper.style.background='#7BC7FF';
      logoImg.setAttribute('src','img/logo_white.png');
      break;
    case 'f0f0f0':
      logoImg.setAttribute('src','img/logo_white.png');
      pc_wrapper.style.background='#f0f0f0';
      break;
    case 'fff':
      pc_wrapper.style.background='#fff';
      logoImg.setAttribute('src','img/bd_logo1.png');
      break;default:
    alert('切换背景颜色失败');
  }
//存入localstorage
  var bg = document.getElementById("pc_wrapper");
  var bgcol = bg.style.background;
  localStorage.setItem("bgColor", bgcol);
}
//读取localstorage
document.getElementById("pc_wrapper").style.background = localStorage.getItem("bgColor");