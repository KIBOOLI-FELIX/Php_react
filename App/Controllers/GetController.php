<?php
namespace App\Controllers;
use App\Models\Get;
class GetController {
  public $result;
public function retrieveData(){
  $this->result=new Get();
  $getResult=$this->result->getData();
  return $getResult;
}
}