<?php
namespace App\Controllers;
use App\Models\Post;
class PostController {
  public $post;
  public $savePost;
  public function __construct($data){
    $this->post=$data;
    
  }
  public function savePost(){
    $this->savePost=new Post($this->post);
    return $this->savePost->saveEmployee();
  }
}