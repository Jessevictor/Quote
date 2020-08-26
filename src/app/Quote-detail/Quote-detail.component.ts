import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../Quote';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './Quote-detail.component.html',
  styleUrls: ['./Quote-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal: Goal;
  @Output() isComplete =new EventEmitter<boolean>();


  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upVote(goal){
    this.goal.upVote++
  }
  downVote(goal){
    this.goal.downVote++
  }

  constructor() { }

  ngOnInit() {
  }

}