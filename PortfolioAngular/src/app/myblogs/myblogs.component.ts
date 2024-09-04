import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';


const hidden = {transform : 'translateX(120%)'};
const visible = {transform : 'translateX(0)'};
const timing = '1s, ease-in';


@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrl: './myblogs.component.css',
  // animations:[ 
    // trigger('openClose',
    //   [
    //     state('closed', style({transform:'translateX(120%)'})),
    //     state('open', style({transform:'translateX(0)'})),
    //     transition('closed <=> open',[animate(timing)])

    //   ])
    
  // ]
  animations: [
    trigger('openClose',[
      transition(':enter', [
        style(hidden),
        animate(timing, style(visible))
      ]),
      transition(':leave', [
        style(visible),
        animate(timing, style(hidden))
      ])
    ])
  ]
})
export class MyblogsComponent {

  // here we are expecting that we are going with the content and then there is the list of bogs

  // protected menuState: 'open' | 'closed' = 'closed';
  protected menuOpen = false;
}
