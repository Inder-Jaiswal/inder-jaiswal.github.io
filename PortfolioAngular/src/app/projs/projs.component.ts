import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-projs',
  templateUrl: './projs.component.html',
  styleUrl: './projs.component.scss',
  animations:[
    trigger('slide', [
      state('false', style({translate: '200%'})),
      state('true', style({translate: 0})),
      transition('false <=> true', animate('0.2s, ease-in-out'))
    ])
  ]
})


export class ProjsComponent  {

 visible = signal(false);


}
