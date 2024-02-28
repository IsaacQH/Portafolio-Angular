import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'; // Imports the Project model
import { ProjectService } from '../../services/projects.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UploadService } from '../../services/upload.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-create', // Component selector
  standalone: true, // Standalone flag
  imports: [CommonModule, FormsModule, RouterModule], // Imports array (not necessary)
  templateUrl: './create.component.html', // Template URL for HTML
  styleUrl: './create.component.css', // Style URL for CSS
  providers: [ProjectService, UploadService]

})

export class CreateComponent implements OnInit{
  public title: string; // Title for the component
  public project: Project; // Project object
  public saveProject:any
  public status:string;  //Status of the post
  public filesToUpload:Array<File>;  //Initializa a string that will save the image

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ){
    this.title = "Create project"; // Sets the title
    this.project = new Project("","","","","", 0,""); // Initializes a new Project object with default values
    this.status = ""   //declararion of default status
    this.filesToUpload = []
  }

  ngOnInit() {
      
  }

  onSubmit(form:any):any{
    //console.log(this.project) //Prints on console the project objects
    
    //SAVE DATA
    this._projectService.saveProject(this.project).subscribe(    //Captures and suscribes the project info on the db
      response => {
        if(response.project){

          //console.log("This is the result of POST")
          //console.log(response)      //Prints the object project as a full JSON whith id assigned
          if(this.filesToUpload){
             //UPLOAD IMAGE
            this._uploadService.makeFileRequest(global.url + "uploadImage/" + response.project._id, [], this.filesToUpload, 'image')
            .then((result:any) => {
              //console.log(result)
              this.saveProject = result.project
              this.status = "SUCCESS";       //declararion of status is true so the message of HTML appears
              form.reset()              //Resets the form
            })


          }else{
            this.saveProject = response.project
            this.status = "SUCCESS";       //declararion of status is true so the message of HTML appears
            form.reset()
          }
         
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

  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files
  }
}