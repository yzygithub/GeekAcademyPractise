<?php
    require_once('DB.php');
    if ($link) {
        $newsid = $_POST['newsid'];
        $newstype = $_POST['newstype'];
        $newstitle = $_POST['newstitle'];
        $newsimg = $_POST['newsimg'];
        $newstime = $_POST['newstime'];
        $newssrc = $_POST['newssrc'];

        $sql = "UPDATE `news` SET `newsType`='{$newstype}',`newsTitle`='{$newstitle}',`newsImg`='{$newsimg}',`newsTime`='{$newstime}',`newsSrc`='{$newssrc}' WHERE `newsId`={$newsid};";

        mysqli_query($link,'SET NAMES utf8');
        $result=mysqli_query($link,$sql);

        echo json_encode(array('update'=>'ok'));
}else {
        echo json_encode(array('连接数据库信息'=>'连接失败'));
      }
     mysqli_close($link);

?>