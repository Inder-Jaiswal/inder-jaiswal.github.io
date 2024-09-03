import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  @Output() menuClick = new EventEmitter<void>();
  protected signUpModalOpen = false;
}
