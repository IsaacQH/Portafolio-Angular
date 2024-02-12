import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  public title:string         //Title initializer as public as string
  public subtitle:string         //subtitle initializer as public as string
  public web:string         //web initializer as public as string

  constructor(){
    this.title = "Isaac Quintero Higuera" //Title declaration
    this.subtitle = "Software developer" //subtitle declaration
    this.web = "https://github.com/IsaacQH"  //web declaration
  }

  ngOnInit() {
  }
}
