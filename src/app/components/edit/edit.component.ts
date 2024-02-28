import { Component, OnInit } from '@angular/core';
import { global } from '../../services/global';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/projects.service';
import { UploadService } from '../../services/upload.service';
import { ActivatedRoute } from '@angular/router'  //importing routers
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public url: string
  public title: string; // Title for the component
  public project: Project; // Project object
  public saveProject:any
  public status:string;  //Status of the post
  public filesToUpload:Array<File>;  //Initializa a string that will save the image

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute       //Allows us to iniciate and use the url inputs
  ){
    this.title = "Edit project"; // Sets the title
    this.status = ""   //declararion of default status
    this.filesToUpload = []
    this.project = new Project("","","","","", 0,""); // Initializes a new Project object with default values
    this.url = global.url                //Declares the url as the global url
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id']           //Obtains the id of the url
      this.getProject(id)             //Sends the id so the component charge the one that was selecterd
    })
}

  getProject(id:any){         //Creaate a method to get the id of the request
    this._projectService.getDetailProject(id).subscribe(   //Suscribes the value using the detail project method
      response => {
        this.project = response.project    //Obtain the project selected with the full model
      },
      error => {
        console.log(<any>error)               //Shows the error
      }
    )
  }

  onSubmit(form:any):any{
    //console.log(this.project) //Prints on console the project objects
    
    //SAVE DATA
    this._projectService.updateProject(this.project).subscribe(    //Captures and suscribes the project info on the db
      response => {
        if(response.project){
          if(this.filesToUpload){
             //UPLOAD IMAGE
            this._uploadService.makeFileRequest(global.url + "uploadImage/" + response.project._id, [], this.filesToUpload, 'image')
                                .then((result:any) => {
                                          this.saveProject = result.project
                                          this.status = "SUCCESS";       //declararion of status is true so the message of HTML appears
            })
          }else{
            this.saveProject = response.project
            this.status = "SUCCESS";       //declararion of status is true so the message of HTML appears
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
