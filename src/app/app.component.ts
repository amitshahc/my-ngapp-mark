import { Component } from '@angular/core';
import { Child1input } from './interfaces/child1input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learnAngular';
  ParentInput: Child1input = {
    title: 'Parent Title',
    description: 'Parent Description ...'
  }

  constructor() {
    console.clear();
  }

  ngOnInit() {
    setTimeout(() => {
      this.ParentInput.title = 'new Title';
    }, 2000)
  }
}
