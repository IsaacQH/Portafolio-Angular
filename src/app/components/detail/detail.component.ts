import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projects.service';  //import the service of Prject
import { global } from '../../services/global';  //import the url  
import { Project } from '../../models/project';  //importing model
import { Router, ActivatedRoute, Params } from '@angular/router'  //importing routers
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  providers: [ProjectService]     //adding provider
})
export class DetailComponent implements OnInit{

  public url:string              //Initiates the url variable
  public project: Project        //Initialices the project model
  public confirm:boolean


  constructor(
    private _projectService: ProjectService,        //Iniciates the Pdoject Service
    private _router: Router,                 //Allows us to iniciate and use the url inputs
    private _route: ActivatedRoute       //Allows us to iniciate and use the url inputs
  ){
    this.url = global.url                //Declares the url as the global url
    this.project = new Project("","","","","", 0,""); // Initializes a new Project object with default values
    this.confirm = false
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

  deleteProject(id:any){         //Creaate a method to get the id of the request
    this._projectService.deleteProject(id).subscribe(   //Suscribes the value using the detail project method of delete
      response => {
        if(response.project){
          this._router.navigate(['/projects'])          //If there is a project deleted, then return me to projects
        }
      },
      error => {
        console.log(<any>error)               //Shows the error
      }
    )
  }

  setConfirm(confirm:boolean){
    this.confirm = confirm
  }


}
