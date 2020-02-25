import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsResponse } from '../model/news'
import { NewsService } from '../news-service.service';

@Component({
  selector: 'app-allnews',
  templateUrl: './allnews.component.html',
  styleUrls: ['./allnews.component.css']
})
export class AllnewsComponent implements OnInit {

  news: NewsResponse;  

  constructor(private newsSrv: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {    
    this.getNews("");
  }

  getNews(keyword: string){  
    if ( keyword  ){
      this.newsSrv.getNews_Everything(keyword).subscribe(n => {
         this.news = n;
    });
    }
    else{
      this.news = new NewsResponse();
    }   
  }
}
