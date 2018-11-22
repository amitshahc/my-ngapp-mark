import { Directive, HostBinding, Input, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[attributeDirective_1]'
})
export class AttributeDirective1 {
  
  @HostBinding('style.color') @Input('textColor') color: string;
  @HostBinding('style.background-color') bgColor: string;
  @Input() bgColorHover: string;
  
  @HostListener('mouseover', ['$event']) onHover($event) {
    this.bgColor = this.bgColorHover;
    console.log($event);
  }
  @HostListener('mouseout', ['$event']) onOut($event) {
    this.bgColor = null;
    console.log($event);
  }
  //constructor() { }
}

@Directive({
  selector: '[attributeDirective_2]',
  host: {
    '[style.color]': 'color',
    '[style.background-color]': 'bgColor',
    '(mouseover)': 'onHover($event)',
    '(mouseout)': 'onOut($event)'
  }
})
export class AttributeDirective2 {
  @Input() color: string;
  @Input() bgColor: string;
  bgColorHover: string = 'black';
  /* Avoid using ElementRef */
  //constructor(private _elRef: ElementRef, private _renderer: Renderer) { }
  onHover($event) {
    this.color = 'yellow';
    this.bgColor = this.bgColorHover;
    // this._renderer.setElementStyle(this._elRef.nativeElement, 'backgroundColor', this.bgColor);
    // this._renderer.setElementStyle(this._elRef.nativeElement, 'color', 'yellow');
  }
  onOut($event) {
    this.bgColor = null;
    this.color = 'black';
    // this._renderer.setElementStyle(this._elRef.nativeElement, 'backgroundColor', null);
    // this._renderer.setElementStyle(this._elRef.nativeElement, 'color', this.color);
  }
}