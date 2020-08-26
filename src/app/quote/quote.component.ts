import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  Quote:Quote[] = [
    new Quote(1, '—  Lucille Ball', '“Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.”',new Date(2020,3,14),0,0),
    new Quote(2,'— Rainer Maria Rilke','“Once the realization is accepted that even between the closest human beings infinite distances continue, a wonderful living side by side can grow, if they succeed in loving the distance between them which makes it possible for each to see the other whole against the sky.”',new Date(2019,6,9),0,0),
    new Quote(3,'— Morrie Schwartz','“The most important thing in life is to learn how to give out love, and to let it come in.”',new Date(2022,1,12),0,0),
    new Quote(4,'— Roy Croft','“I love you not because of who you are, but because of who I am when I am with you.”',new Date(2019,0,18),0,0),
    new Quote(5,'— Eleanor Roosevelt','“It takes courage to love, but pain through love is the purifying fire which those who love generously know. We all know people who are so much afraid of pain that they shut themselves up like clams in a shell and, giving out nothing, receive nothing and therefore shrink until life is a mere living death.”',new Date(2019,2,14),0,0),
    new Quote(6,'— Maya Angelou','“Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.”',new Date(2030,3,14),0,0),
  ];

  addNewQuote(Quote){
    let QuoteLength = this.Quote.length;
    Quote.id = QuoteLength+1;
    Quote.completeDate = new Date(Quote.completeDate)
    this.Quote.push(Quote)
  }

  toggleDetails(index){
    this.Quote[index].showDescription = !this.Quote[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.Quote[index].Quote}?`)

      if (toDelete){
        this.Quote.splice(index,1)
    }
  }
}
  

  constructor() { }

  ngOnInit(): void {
  }

}
