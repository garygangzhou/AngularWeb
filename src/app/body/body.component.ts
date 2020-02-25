import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news-service.service'
import { NewsResponse } from '../model/news';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

   constructor() { 
  
  }

  ngOnInit() {
   
  }
}

