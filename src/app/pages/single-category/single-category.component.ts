import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  singleCategoryArray: any;
  categoryName!: string;
  constructor(private route: ActivatedRoute,
    private postService: PostsService
    ) {}



  ngOnInit(): void {

    this.route.params.subscribe((data) => {
      this.categoryName = data['category'];
      this.postService.loadCategoryPosts(data['id']).subscribe((val) => {
        this.singleCategoryArray = val;
      })
    })
      
  }

}
