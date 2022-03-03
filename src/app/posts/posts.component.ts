import { PostService } from './../Services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private PostService:PostService) { }

  PostsList:any;  
  errMsg:any;

  ngOnInit(): void
   {

      this.PostService.GetAllPosts().subscribe(
        postsData => {
          this.PostsList=postsData;
        },
        error =>{
          this.errMsg = error;
        });
  }

}