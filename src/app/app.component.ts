import {  Component } from '@angular/core';
import {  Child1input } from './interfaces/child1input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learnAngular';
  ParentInput: Child1input = {
    title: 'Initial Parent Title',
    description: 'Parent Description ...'
  }
  private cntClick = 0;
  private primitiveParent: string = "Parent String"; 
  parent_var:string = "InitVal from Parent";

  constructor() {
    console.clear();
  }

  ngOnInit() {
    // setTimeout(function () {
    //   this.ParentInput.title = 'New Updated Title';
    // }.bind(this), 2000);

    // setTimeout(
    //   () => console.table('ParentInput: ',
    //     this.ParentInput.title), 7000
    // );
    setTimeout(function () {
      this.primitiveParent = 'New Updated Primitive from Parent';
    }.bind(this), 2000);
  }

  parentCatchUpdate(clicked: boolean) {
    //console.table(childInput);
    if (clicked) {
      this.cntClick++;
      this.ParentInput.title = 'Child updated the title ' + this.cntClick + ' times';
      //this.primitiveParent = "New Parent String";
      console.log(this.primitiveParent);
    }
  }

  updateChild2() {
    this.parent_var += "-";
  }
}
