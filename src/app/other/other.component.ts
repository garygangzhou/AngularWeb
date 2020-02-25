import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  show: boolean = false;
  messageStr: string ;

  constructor() {
    sessionStorage.setItem('key', 'value1');
   }

  ngOnInit() {
    //testing
  }

  getSessionMessage(): string {
    this.messageStr = sessionStorage.getItem('key')
    return this.messageStr;
  }
}
