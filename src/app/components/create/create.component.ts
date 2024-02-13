import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'; // Imports the Project model
import { ProjectService } from '../../services/projecs.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create', // Component selector
  standalone: true, // Standalone flag
  imports: [CommonModule, FormsModule], // Imports array (not necessary)
  templateUrl: './create.component.html', // Template URL for HTML
  styleUrl: './create.component.css', // Style URL for CSS
  providers: [ProjectService]

})

export class CreateComponent implements OnInit{
  public title: string; // Title for the component
  public project: Project; // Project object

  constructor(
    private _projectService: ProjectService
  ){
    this.title = "Create project"; // Sets the title
    this.project = new Project("","","","","", 0,""); // Initializes a new Project object with default values
  }

  ngOnInit() {
      
  }

  onSubmit(form:any):any{
    console.log(this.project)
  }
}