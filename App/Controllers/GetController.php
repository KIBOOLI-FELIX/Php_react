<?php
namespace App\Controllers;
use App\Models\Get;
class GetController {
  public $result;
  public $id;
  public function __construct($id){
    $this->id=$id;
  }
  public function retrieveData(){
    if($this->id!==null){
      $this->result=new Get($this->id);
      $getResult=$this->result->getData();
    }else{
      $this->result=new Get(null);
      $getResult=$this->result->getData();
    }
    return $getResult;
}
}