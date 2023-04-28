<?php
namespace App\Database;
class Database {
  //setting up database connection variables
  private $host='localhost';
  private $dbname='factory';
  private $username='root';
  private $password='root';
  private $charset='utf8mb4';
  private $dsn;
  private $conn;

  //function to connect to the database
  public function connect(){
    //initializing some of the parameters
    $this->conn=null;
    $this->dsn="mysql:host=$this->host;dbname=$this->dbname;charset=$this->charset";
    $options=[
      \PDO::ATTR_ERRMODE=>\PDO::ERRMODE_EXCEPTION,
      \PDO::ATTR_DEFAULT_FETCH_MODE=>\PDO::FETCH_ASSOC,
    ];
    try {
      $this->conn=new \PDO($this->dsn,$this->username,$this->password,$options);
    } catch (\PDOException $e) {
      throw new \PDOException($e->getMessage(),(int)$e->getCode());
    }
    return $this->conn;
  }
}