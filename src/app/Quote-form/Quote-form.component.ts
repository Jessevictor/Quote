import { Component, OnInit, Output, EventEmitter } from'@angular/core';
import { Goal } from '../Quote';

@Component({
  selector: 'app-goal-form',
  templateUrl: './Quote-form.component.html',
  styleUrls: ['./Quote-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goal(0,"","",new Date(),0,0);
  @Output() addGoal = new EventEmitter<Goal>();
  submitGoal(){
    this.addGoal.emit(this.newGoal);
      }
  constructor() { }

  ngOnInit() {
  }

}
