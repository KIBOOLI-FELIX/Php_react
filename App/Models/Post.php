<?php
namespace App\Models;
use App\Database\Database;
class Post {
  //employee params
  // public $fullname;
  // public $phyAddress;
  // public $phoneContact;
  // public $jobtitle;
  // public $salary;
  public $post;
  private $conn;
  public function __construct($postData){
    $this->post=$postData;
    $this->conn=new Database();
  }
  public function saveEmployee(){
    $data=$this->post;
    $query="INSERT INTO employees(fullName,email,physicalAddress,
     phoneContact,jobTitle,salary)
     VALUES(?,?,?,?,?,?)";
    $stmt=$this->conn->connect()->prepare($query);
    $stmt->bindParam(1,$data['fullName'],\PDO::PARAM_STR);
    $stmt->bindParam(2,$data['emailAddress'],\PDO::PARAM_STR);
    $stmt->bindParam(3,$data['phyAddress'],\PDO::PARAM_STR);
    $stmt->bindParam(4,$data['phoneContact'],\PDO::PARAM_STR);
    $stmt->bindParam(5,$data['jobTitle'],\PDO::PARAM_STR);
    $stmt->bindParam(6,$data['salary'],\PDO::PARAM_STR);

    if( $stmt->execute()){
      $response=json_encode(['status'=>'success','message'=>'User Added']);
    }else{
      $response=json_encode(['status'=>'error','message'=>'Failed to Add User']);
    }
    return $response;
   
  }

}