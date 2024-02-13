import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  public title:string         //Title initializer as public as string
  public subtitle:string         //subtitle initializer as public as string
  public web:string         //web initializer as public as string
  
  public article:string
  public langs:string
  public skills:Array<string>
  public aptitudes:Array<string>

  constructor(){
    this.title = "Isaac Quintero Higuera" //Title declaration
    this.subtitle = "Software developer" //subtitle declaration
    this.web = "https://github.com/IsaacQH"  //web declaration

    this.article = `A highly qualified 24-year-old Mechatronic Engineer with a diverse skill set encompassing programming, automation,
                  mechanics, and electronics. Committed to delivering projects with a strong emphasis on excellence. Passionate about
                  programming and dedicated to integrating design aesthetics, with a particular focus on front-end technologies. Eager to
                  contribute dynamic skills to a forward-thinking team. Ready to make meaningful contributions to innovative projects.`
    this.langs = "English & Spanish"
    this.skills = ["JavaScript", "HTML5/CSS", "TypeScript", "Angular", "jQuery", "SQL", "Unix/Linux", "Git", "Python", "Java",          
                    "POO", "CI/CD", "Agile", "AWS", "Matlab", "C++"]
    this.aptitudes = ["Creative", "Inegrity", "Growth mindset", "Collaboration", "Flexibility"]
  }

  ngOnInit() {
  }
}
