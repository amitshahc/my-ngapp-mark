import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'Pchild1',
  template: `
    <p>
      Parent-child1 works!
      <input #email1 type="email" name="email" value="email@e.com" />
    </p>
  `,
  styles: []
})
export class Child1Component implements OnInit {

  private inner1: string = "inner 1";
  @ViewChild('email1') email1: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

}
