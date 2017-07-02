/**
 * Created by yzy on 2017/6/2.
 */
$(document).ready(function () {
  refreshNews('推荐');

  $('nav a').click(function (e) {
    e.preventDefault();
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
    var type = $(this).text();
    console.log(type);
    refreshNews(type);
  });
});

function refreshNews(type) {

  var $lists=$('.news-lists');
  $lists.empty();
  $.ajax({
    url:'./server/getnews.php',
    type:'get',
    datatype:'json',
    data:{newstype:type},
    success:function (data) {
      data.forEach(function (item,index,array) {
        var $list=$('<li></li>').addClass('news-list').prependTo($lists);
        var $newsImg=$('<div></div>').addClass('news-img').appendTo($list);
        var $img=$('<img>').attr('src',item.newsimg).appendTo($newsImg);
        var $newsContent=$('<div></div>').addClass('news-content').appendTo($list);
        var $h1=$('<h1></h1>').html(item.newstitle).appendTo($newsContent);
        var $p=$('<p></p>').appendTo($newsContent);
        var $newsTime=$('<span></span>').addClass('news-time').html(item.newstime).appendTo($p);
        var $newsSrc=$('<span></span>').addClass('news-src').html(item.newssrc).appendTo($p);
        console.log(data);
      });
    }
  });



}