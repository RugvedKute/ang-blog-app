import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}

  singlePostData: any;
  similarPostArray: any;
  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.postService.countViews(data['id'])
      this.postService.loadOnePost(data['id']).subscribe((val) => {
        this.singlePostData = val;
        this.loadSimilarPost(this.singlePostData.category.categoryId)
      });
    }); 
  }

  loadSimilarPost(catId: string) {
    this.postService.loadSimilar(catId).subscribe((data) => {
      this.similarPostArray = data;

    });
      
  }

  
}
