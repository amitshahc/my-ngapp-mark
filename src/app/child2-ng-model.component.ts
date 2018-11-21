import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'myapp-child2',
  template: `
    <p>
      <!--
       Two-way data binding on input within same component variable 
       [(ngModel)] on <input> html element
      -->
      <input type="text" [(ngModel)]="child_var"><br />
      <!-- Alternavtive to [(ngModel)] catch on event  -->
      <!-- input type="text" [ngModel]="child_var" (ngModelChange)="childChanged($event)"><br / -->
      
      Child: {{child_var}}<br />
      <button (click)="updateParent()">Update from Child</button>
    </p>
  `,
  styles: []
})
export class Child2NgModelComponent implements OnInit {

  @Input() child_var: string;
  @Output() child_varChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  //This is to update Parent variable
  updateParent() {
    //this.child_var += "*";
    this.child_varChange.emit(this.child_var + "*")
  }

  childChanged(newValue) {
    this.child_var = newValue;
  }
}
