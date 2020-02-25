import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsResponse } from '../model/news'
import { NewsService } from '../news-service.service';


@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {

  news: NewsResponse;
  currentPage: string = "1";
  pageSize: string = "5";
  currentCountry: string = "";

  constructor(private newsSrv: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {   
    this.getNews(this.currentCountry);
  }

  getNews(country: string){  
    if ( !country )
     {  
       this.currentCountry = "";
       this.currentPage = "1";
        this.news = new NewsResponse();
     }

    if ( sessionStorage.getItem(country + "_" + this.currentPage) != null ){
      this.news = JSON.parse(sessionStorage.getItem(country + "_" + this.currentPage));
    }

    if (country){
      if (this.currentCountry != country)
        this.currentPage = "1";
        
      this.currentCountry = country;
      
    this.newsSrv.getNews_Headlines(this.currentCountry, this.currentPage, this.pageSize).subscribe(n => {  
       this.news = n;
       sessionStorage.setItem(this.currentCountry + "_" + this.currentPage, JSON.stringify(n));
     });
    }
  }

  //handle bubble event
  pagerChangeEvent(thecurrentPage: string){
   // console.log(thecurrentPage);
     this.currentPage = thecurrentPage;
     this.getNews(this.currentCountry);
  }
}

