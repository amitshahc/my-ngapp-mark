import {
  Component
} from '@angular/core';
import {
  Child1input
} from './interfaces/child1input';

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
  }

  parentCatchUpdate(clicked: boolean) {
    //console.table(childInput);
    if (clicked) {
      this.cntClick++;
      this.ParentInput.title = 'Child updated the title '+this.cntClick+' times';  
    }    
  }
}
