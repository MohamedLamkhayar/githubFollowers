import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    status = true;
    posts: any[] = [];
    post = {
      id: 0,
      title: '',
      body: '',
      userId: 0
    };
  constructor(private postService : PostService) { 
    
  }

  ngOnInit(){
   this.getPost();

  }
  getPost(){
    this.postService.getAll()
    .subscribe(posts => 
      this.posts = posts,  
      (error) => {
      alert('error Server ');
      console.log(error);
  })
  }
  createPost() {
   this.postService.create(this.post)
    .subscribe(newPost => {
     this.post.id = newPost.json().id;
     //this.posts.push(this.post);
     this.posts.unshift(this.post);
    }, (error : AppError) => {
      if(error instanceof BadInput){
        alert('ce post est déja supprimé !!')
      } else{  
      alert('error Server ');
      console.log(error);
    }
  })
  }
  editPost(post){
    this.post = post;
    this.status = false;
  }
  updatePost(){
    this.postService.update(this.post)
    .subscribe(posts => {
        this.post = {
          id: 0,
          title:'',
          body:'',
          userId:0
        }
        this.status = true;

    
      })
    
  }
  deletePost(post){
    this.postService.delete(post)
    .subscribe(response => {
      console.log(response)
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, (error : AppError) => {
      if(error instanceof NotFoundError){
        alert('ce post est déja supprimé !!')
      } else{  
      alert('error Server ');
      console.log(error);
    }
  })
  }
}
