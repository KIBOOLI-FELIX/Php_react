<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Content-Type:application/json');
require_once "../Database/Dbconnect.php";
require_once "../Models/Get.php";
require_once "../Controllers/GetController.php";
use App\Controllers\GetController;
// use App\Models\Get;
$result=new GetController();
$data=$result->retrieveData();
echo json_encode($data);