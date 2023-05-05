<?php
namespace App\Models;
use App\Database\Database;
class Post {

  public $post;
  public $update;
  private $conn;
  public $empId;
  public function __construct($postData,$updatedData,$id){
    $this->post=$postData;
    $this->update=$updatedData;
    $this->empId=$id;
    $this->conn=new Database();
  }
  //function to add employee
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
      $response=json_encode(['status'=>'success','message'=>'Employee Added']);
    }else{
      $response=json_encode(['status'=>'error','message'=>'Failed to Add Employee']);
    }
    return $response;
   
  }

  //function to update employee info
  public function updateEmployee(){
    $update=$this->update;
    $query="UPDATE employees SET fullName=?,email=?,physicalAddress=?,
              PhoneContact=?,jobTitle=?,salary=? WHERE id=?";
    $stmt=$this->conn->connect()->prepare($query);
    $stmt->bindParam(1,$update['fullName'],\PDO::PARAM_STR);
    $stmt->bindParam(2,$update['email'],\PDO::PARAM_STR);
    $stmt->bindParam(3,$update['physicalAddress'],\PDO::PARAM_STR);
    $stmt->bindParam(4,$update['phoneContact'],\PDO::PARAM_STR);
    $stmt->bindParam(5,$update['jobTitle'],\PDO::PARAM_STR);
    $stmt->bindParam(6,$update['salary'],\PDO::PARAM_STR);
    $stmt->bindParam(7,$update['id'],\PDO::PARAM_INT);

    if( $stmt->execute()){
      $response=json_encode(['status'=>'success','message'=>'Employee Updated']);
    }else{
      $response=json_encode(['status'=>'error','message'=>'Failed to update']);
    }
    return $response;

  }

  //function to delete employee
  public function deleteEmployee(){
    $query="DELETE FROM employees WHERE id=?";
    $stmt=$this->conn->connect()->prepare($query);
    $stmt->bindParam(1,$this->empId,\PDO::PARAM_INT);

    if($stmt->execute()){
      $response=json_encode(['status'=>'success','message'=>'Employee Deleted']);
    }else{
      $response=json_encode(['status'=>'error','message'=>'Failed to delete']);
    }
    return $response;
  }

}