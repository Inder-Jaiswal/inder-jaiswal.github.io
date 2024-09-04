import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proficiency',
  templateUrl: './proficiency.component.html',
  styleUrl: './proficiency.component.css',
  animations:[
    trigger('wobble',[
      transition('false => true',[
        animate('0.75s', keyframes([
          style({transform: 'translateX(-5%)', offset:0.1}),
          style({transform: 'translateX(5%)', offset:0.3}),
          style({transform: 'translateX(-5%)', offset:0.5}),
          style({transform: 'translateX(5%)', offset:0.7}),
          style({transform: 'translateX(-5%)', offset:0.9}),
          style({transform: 'translateX(0)', offset:1}),
        ]))
      ])
    ])
  ]
})
export class ProficiencyComponent {
  protected wobbleField = false;

   startwobbleField(): void
 {
  this.wobbleField = true;
 }
}
