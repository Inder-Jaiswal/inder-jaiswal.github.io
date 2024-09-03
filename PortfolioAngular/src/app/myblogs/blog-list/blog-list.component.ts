import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  @Output() close = new EventEmitter<void>();
  protected items = [
    'Shoes',
    'Clothing',
    'Accessories',
    'Sale',
    'Gift guide',
    'Customs',
    'Skateboarding',
    'More' 
  ];
}