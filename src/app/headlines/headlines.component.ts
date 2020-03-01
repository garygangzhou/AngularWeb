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
  theCurrentPage: string = "1"  
  theCurrentCountry: string = "";
  pageSize: string = "6"; 
  p: number = 1;

  constructor(private newsSrv: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {   
    this.getNews(this.theCurrentCountry);
  }

  getNews(country: string){  
    if ( !country ){  
       this.theCurrentCountry = "";
       this.theCurrentPage = "1";
        this.news = new NewsResponse();
        return;
     }

    if ( sessionStorage.getItem(country + "_" + this.theCurrentPage) != null ){
      this.news = JSON.parse(sessionStorage.getItem(country + "_" + this.theCurrentPage));
      this.p = parseInt(this.theCurrentPage);
      return ;
    }

    if (country){
      if (this.theCurrentCountry != country)
      {  
        this.theCurrentPage = "1";
        this.theCurrentCountry = country;
        this.p = parseInt(this.theCurrentPage);
      }
      
    this.newsSrv.getNews_Headlines(this.theCurrentCountry, this.theCurrentPage, this.pageSize).subscribe(n => {  
       this.news = n;
       sessionStorage.setItem(this.theCurrentCountry + "_" + this.theCurrentPage, JSON.stringify(n));
       this.p = parseInt(this.theCurrentPage);
     });
    }
  }

  //handle page change
  pagerChangeEvent(currentPage: number){        
     console.log("current page: " + currentPage);
     this.theCurrentPage = currentPage.toString();
     this.getNews(this.theCurrentCountry);
  }
}

