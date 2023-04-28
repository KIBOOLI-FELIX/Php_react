<?php
namespace App\Controllers;
use App\Models\Post;
class PostController {
  public $post;
  public function __construct($data){
    $this->post=$data;
    
  }
  public function getPost(){

  }
}