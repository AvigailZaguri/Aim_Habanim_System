import { Component, OnInit ,NgZone } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-top-nav2',
  templateUrl: './top-nav2.component.html',
  styleUrls: ['./top-nav2.component.scss'],
  animations: [
    trigger('collapse', [
      state('open', style({
        opacity: '1',
        display: 'block',
        transform: 'translate3d(0, 0, 0)'
      })),
      state('closed',   style({
        opacity: '0',
        display: 'none',
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('closed => open', animate('200ms ease-in')),
      transition('open => closed', animate('100ms ease-out'))
    ])
  ],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class TopNav2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  collapse:string = "open";

  toggleCollapse() {
  // this.show = !this.show
    this.collapse = this.collapse == "open" ? 'closed' : 'open';
  }

  onResize(event){
    //console.log(event.target.innerWidth   );// window width
    
    if (event.target.innerWidth > 768 )
    {
        this.collapse = "open";
    }
    if (event.target.innerWidth < 768 )
    {
        this.collapse = "closed";
    }
  }

}
