import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Child1input } from './interfaces/child1input';
//import { EventEmitter } from 'events';

@Component({
  selector: 'myapp-child1',
  template: `
    <p>
      {{localInput.title}}<br />
      {{localInput.description}}
      <button (click)="sendUpdatedTitle()">Update Title</button>
    </p>
  `,
  styles: []
})
export class Child1Component implements OnInit {

  @Input('AliasInput') localInput: Child1input;
  @Output() updateParentEvent = new EventEmitter<boolean>();
  private btnClick: boolean = false;
  
  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.localInput.title = "Child updated Title";
    //   this.sendUpdatedTitle();
    // }, 5000);
  }

  sendUpdatedTitle() {
    //console.log('sendUpdatedTitle()');
    this.btnClick = true;
    this.updateParentEvent.emit(this.btnClick);
  }
}
