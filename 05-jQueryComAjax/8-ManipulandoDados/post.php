<?php
/*
    if($_REQUEST){
        echo json_encode(["msg"=>"Request"]);exit;
    }*/

    if($_GET){
        //var_dump($_GET); exit;
        //header("HTTP/1.0 404 Not Found");exit;
        //echo "<name>{$_GET['name']}</name>";
        echo json_encode($_GET);exit;
    }
    if($_POST){
        $_POST['name'] = $_POST['name']. " DB";
        $_POST['email'] = $_POST['email']. " DB";
        $_POST['tel'] = $_POST['tel']. " DB";
        echo json_encode($_POST);exit;
    }

