<?php
namespace App\Controllers;
use App\Models\Post;
class PostController {
  public $post;
  public $update;
  public $save;
  public $saveUpdate;
  public $id;
  public $delete;
  public function __construct($data,$update,$id){
    $this->post=$data;
    $this->update=$update;
    $this->id=$id;
    
  }
  //passes on data for saving
  public function savePost(){
    $this->save=new Post($this->post,null,null);
    return $this->save->saveEmployee();
  }
  //passes on data for update 
  public function update(){
    $this->saveUpdate=new Post(null,$this->update,null);
    return $this->saveUpdate->updateEmployee();
  }
  //passes on id to delete user
  public function delete(){
    $this->delete=new Post(null,null,$this->id);
    return $this->delete->deleteEmployee();
  }

}