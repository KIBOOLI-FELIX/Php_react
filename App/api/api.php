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
    if(isset($_GET['id'])){
      // echo $_GET['id'];
      $result=new GetController($_GET['id']);
      $data=$result->retrieveData();
      echo json_encode($data);
    }else{
       //data for all users
      $result=new GetController(null);
      $data=$result->retrieveData();
      echo json_encode($data);
    }
    break;
  case "POST":
    //getting data from the post request
    $requested_body=file_get_contents('php://input');
    $data=json_decode($requested_body,true);
    $message=new PostController($data,null,null);
    echo $message->savePost();
    break;
  case "PUT":
    // echo json_encode(['status'=>'success','message'=>'Employee Updated Successfully']);
    $req_updateData=file_get_contents('php://input');
    $updateData=json_decode($req_updateData,true);
    $msgUpdate=new PostController(null,$updateData,null);
    echo $msgUpdate->update();
    break;
  case "DELETE":
    $queries=array();
    parse_str($_SERVER['QUERY_STRING'],$queries);
    $employId=$queries['id'];
    $msgDelete=new PostController(null,null,$employId);
    echo $msgDelete->delete();
}




