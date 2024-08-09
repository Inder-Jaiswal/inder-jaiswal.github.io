import { Component } from '@angular/core';
import { ROUTER_TOKENS } from '../app-routing.module';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  readonly ROUTER_TOKENS = ROUTER_TOKENS;
  //readonly Category = Category;
}

