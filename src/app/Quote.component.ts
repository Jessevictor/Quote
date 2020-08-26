import { Component, OnInit } from '@angular/core';
import { Goal } from '../Quote';

@Component({
  selector: 'app-goal',
  templateUrl: './Quote.component.html',
  styleUrls: ['./Quote.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, '– Alain De Botton', '“Our capacity to draw happiness from aesthetic objects or material goods in fact seems critically dependent on our first satisfying a more important range of emotional or psychological needs, among them the need for understanding, for love, expression and respect.”',new Date(2019,9,14),0,0),
    new Goal(2,'– William Morris','“The true secret of happiness lies in the taking a genuine interest in all the details of daily life.”',new Date(2019,6,9),0,0),
    new Goal(3,'– William Saroyan ','“The greatest happiness you can have is knowing that you do not necessarily require happiness.”',new Date(2019,1,12),0,0,),
    new Goal(4,'– Amanda Bynes','“People should find happiness in the little things, like family.”',new Date(2019,11,18),0,0),
    new Goal(5,'– Andrew Delbanco','“As people spin faster and faster in the pursuit of merely personal happiness, they become exhausted in the futile effort of chasing themselves.”',new Date(2019,2,14),0,0),
    new Goal(6,'– Baruch Spinoza','“All happiness or unhappiness solely depends upon the quality of the object to which we are attached by love.”',new Date(2019,3,14),0,0),
  ];


  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  constructor() { }

  ngOnInit() {
  }

}

