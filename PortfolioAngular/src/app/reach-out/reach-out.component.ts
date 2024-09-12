import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reach-out',
  templateUrl: './reach-out.component.html',
  styleUrl: './reach-out.component.css'
})

export class ReachOutComponent implements OnInit{
  
  public showSkills:boolean =false;

ngOnInit(): void {
  this.showSkills= false;
}

}
