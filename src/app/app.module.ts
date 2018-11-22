import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1.component';
import { Child2NgModelComponent } from './child2-ng-model.component';
import { AttributeDirective1, AttributeDirective2 } from './directives/attribute-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2NgModelComponent,
    AttributeDirective1,
    AttributeDirective2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
