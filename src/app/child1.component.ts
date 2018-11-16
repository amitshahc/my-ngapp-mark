import { Component, OnInit, Input } from '@angular/core';
import { Child1input } from './interfaces/child1input';

@Component({
  selector: 'myapp-child1',
  template: `
    <p>
      {{localInput.title}}<br />
      {{localInput.description}}
    </p>
  `,
  styles: []
})
export class Child1Component implements OnInit {

  @Input('AliasInput') localInput: Child1input;
  constructor() { }

  ngOnInit() {
  }

}
