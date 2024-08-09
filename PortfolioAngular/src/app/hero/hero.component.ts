import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  constructor() {
    console.log('In Constructor')
  }
  ngOnInit(): void {
    console.log('On Init')
  }
}
