import { Component, OnInit, Input, Output } from '@angular/core';
import { NewsResponse } from '../model/news';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input() news: NewsResponse;
  @Input() numberPerPage: number;

  @Output() pageChangeEvent = new EventEmitter();
  pagerpage_prefix: string = "pager_page"

  constructor() { }

  ngOnInit() {  }

  numberOfPages(): number {
    return Math.ceil( this.news.totalResults / this.numberPerPage )
  }

  range(start: number, end: number) : Array<number> {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
  }

  pageChange(event){
    //how to pass parameter to this event handler
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

    this.pageChangeEvent.emit( value.replace(this.pagerpage_prefix, ""));
  }
}
