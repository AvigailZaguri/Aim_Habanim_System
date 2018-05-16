import {Component, Input} from '@angular/core';

@Component({
   selector:'circle',
   templateUrl: './circle.component.html',
  styleUrls:['./circle.component.css']
})
 
export class CircleComponent{
  @Input() page: string
}



