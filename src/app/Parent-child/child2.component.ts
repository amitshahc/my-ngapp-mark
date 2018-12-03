import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Pchild2',
  template: `
    <p>
      Parent-child2 works!
    </p>
  `,
  styles: []
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  method1() {
    console.log('Method 1 called');
  }

}
