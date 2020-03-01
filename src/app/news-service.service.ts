import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from './model/news';

const httpOptions = {
  headers: new HttpHeaders({
    
    'X-Api-Key': 'a5b751178b794c7e9e1b71980a1cd2b6'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  // apiUrl_headlines: string = "https://newsapi.org/v2/top-headlines?country=__cn__&pagesize=5&page=1";
  apiUrl_headlines: string = "https://newsapi.org/v2/top-headlines?country=__cn__";
  //apiUrl_everything: string = "https://newsapi.org/v2/everything?q=canada";
  apiUrl_everything: string = "https://newsapi.org/v2/everything";

  constructor(private http: HttpClient) { }

  getNews_Headlines(country: string, page: number, pageSize: number): Observable<NewsResponse> {
      let url = this.apiUrl_headlines.replace("__cn__", country);
      if ( page && pageSize)
        url = url + "&page=" + page + "&pageSize=" + pageSize;
      return this.http.get<NewsResponse>(url, httpOptions);      
  }

  getNews_Everything(queryWord: string, page: number, pageSize: number): Observable<NewsResponse>{  
    let url = `${this.apiUrl_everything}?q=${queryWord}&page=${page}&pageSize=${pageSize}`;
      return this.http.get<NewsResponse>(url, httpOptions);
  }

  // getNews_Everything_Obj(queryWord: string): NewsResponse{
  //   let news: NewsResponse;
  //   this.getNews_Everything(queryWord).subscribe(n => {  
  //     news = n;

  //     console.log(n)
  //   });
  //   return news;
  // }
}
