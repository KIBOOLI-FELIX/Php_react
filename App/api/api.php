<?php
//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Content-Type:application/json');

require_once "../Database/Dbconnect.php";
require_once "../Models/Post.php";
require_once "../Controllers/PostController.php";
require_once "../Models/Get.php";
require_once "../Controllers/GetController.php";
use App\Controllers\PostController;
use App\Controllers\GetController;

//checking for the request method
$req_method=$_SERVER['REQUEST_METHOD'];
switch($req_method){
  case "GET":
    $result=new GetController();
    $data=$result->retrieveData();
    echo json_encode($data);
    break;
  case "POST":
    //getting data from the post request
    $requested_body=file_get_contents('php://input');
    $data=json_decode($requested_body,true);
    $message=new PostController($data);
    echo $message->savePost();
    break;

}




