import { Component, OnInit, ViewChild, ContentChild, AfterContentInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Child1Component } from './Parent-child/child1.component';
import { Child2Component } from './Parent-child/child2.component';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html'  
})
export class ParentComponent implements AfterContentInit {
  
  @ContentChild(Child1Component) child1: Child1Component;
  //@ViewChild(Child2Component) child2: Child2Component;
  @ViewChildren(Child2Component) child2: QueryList<Child2Component>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.table(this.child1.inner1, this.child1.email1.nativeElement.value);    
  }

  ngAfterViewInit() {
    //this.child2.method1();
    this.child2.map( (f) => f.method1());
  }
}
