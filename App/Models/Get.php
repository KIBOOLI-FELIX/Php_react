<?php

namespace App\Models;
use App\Database\Database;
class Get {
  //database connection 
  private $conn;
  public $id;
  public function __construct($id){
    $this->conn=new Database();
    $this->id=$id;
  }

  public function getData(){
    if($this->id!==null){
      $query="SELECT * FROM employees WHERE id=$this->id";
      $stmt=$this->conn->connect()->prepare($query);
      $stmt->execute();
    }else{
      $query="SELECT * FROM employees";
      $stmt=$this->conn->connect()->prepare($query);
      $stmt->execute();
    }
    //checking if any results are found or not
    if($stmt->rowCount()>0){
      $rows=$stmt->fetchAll();
      return $rows;
    }else{
      return "No records found in the database";
    }
    
  }
}