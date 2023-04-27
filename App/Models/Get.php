<?php
namespace App\Models;
require "Database/Dbconnect.php";
use App\Database\Database;
class Get {
  //database connection 
  private $conn=(new Database())->connect();

  public function getData(){
    $query="SELECT * FROM employees";
    $stmt=$this->conn->prepare($query);
    $stmt->execute();
    return $stmt;
  }
}