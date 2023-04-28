<?php

namespace App\Models;
use App\Database\Database;
class Get {
  //database connection 
  private $conn;
  public function __construct(){
    $this->conn=new Database();
  }

  public function getData(){
    $query="SELECT * FROM members";
    $stmt=$this->conn->connect()->prepare($query);
    $stmt->execute();
    //checking if any results are found or not
    if($stmt->rowCount()>0){
      $rows=$stmt->fetchAll();
      return $rows;
    }else{
      return "No records found in the database";
    }
    
  }
}