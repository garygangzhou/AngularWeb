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
  pageSize: number = 10;
  theCurrentPage: number = 1 ;
  theCurrentKeyword: string = "";

  constructor(private newsSrv: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {    
    this.getNews();
  }

  getNews_btnHandler(keyword: string){
    console.log(keyword);

    // new search
    this.theCurrentPage = 1;
    this.theCurrentKeyword = keyword;
    return this.getNews();
  }

  getNews(){  
    if ( this.theCurrentKeyword ){    
      this.newsSrv.getNews_Everything(this.theCurrentKeyword, this.theCurrentPage, this.pageSize).subscribe(n => {
         this.news = n;
    });
    }
    else{
      this.news = new NewsResponse();
    }   
  }

  pagerChangeEvent(currentPage: number){
    // handle pager event
    this.theCurrentPage = currentPage;
    this.getNews();
  }
}
