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
  public status:string;  //Status of the post

  constructor(
    private _projectService: ProjectService
  ){
    this.title = "Create project"; // Sets the title
    this.project = new Project("","","","","", 0,""); // Initializes a new Project object with default values
    this.status = ""      //declararion of default status
  }

  ngOnInit() {
      
  }

  onSubmit(form:any):any{
    console.log(this.project) //Prints on console the project objects
    this._projectService.saveProject(this.project).subscribe(    //Captures and suscribes the project info on the db
      response => {
        if(response.project){
          this.status = "SUCCESS";       //declararion of status is true so the message of HTML appears
          console.log("This is the result of POST")
          console.log(response)      //Prints the object project as a full JSON whith id assigned
          form.reset()
        }else{
          this.status = "FAILED";       //declararion of status is false, so the message dont appear
        }
        
      },
      error =>{
        console.log("There was an error")   //Prints the error if ther is sone
        console.log(<any>error)   //Prints the error if ther is sone
      }
    )
  }
}