import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

@Input() Quote: Quote;
@Output() isComplete = new EventEmitter<boolean>();

QuoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}
upVote(Quote){
  this.Quote.upVote++
}
downVote(Quote){
  this.Quote.downVote++
}

  constructor() { }

  ngOnInit(){
  }

}
