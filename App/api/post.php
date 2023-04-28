<?php
//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Content-Type:application/json');

echo json_encode(array(
  'success'=>'Successfully'
));
$requested_body=file_get_contents('php://input');
$data=json_decode($requested_body,true);
var_dump($data);




