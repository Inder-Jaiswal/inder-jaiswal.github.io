import { Component, signal } from '@angular/core';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-prof-certific',
  templateUrl: './prof-certific.component.html',
  styleUrl: './prof-certific.component.scss',
  animations:[
    trigger('slideToggle', [
      transition('* => *',[
        group([
          query(':enter', style({transform: 'translateX({{ enterStart }})  scale(0.25)'} )),
          query(':leave', 
            [animate('750ms ease-in-out',style({transform: 'translateX({{ leaveEnd }}) scale(0.25)'}))]
          ),
          query(':enter',[
            animate('750ms ease-in-out', style ({transform: 'translateX(0) scale(1)'}))
          ])  
        ])
      ],{
        params:{
          leaveEnd:'',
          enterStart:''
        }
      })
    ])
  ]
})
export class ProfCertificComponent {
protected selectedImage = signal(1);
protected animationDirection = signal<'right'| 'left'>('right');

prev(){
  if(this.selectedImage() > 1){
    this.animationDirection.set('left');
    this.selectedImage.set(this.selectedImage() - 1);
  }
}
next(){
  if(this.selectedImage() < 3){
    this.animationDirection.set('right');
    this.selectedImage.set(this.selectedImage() + 1);
  }
}
}
