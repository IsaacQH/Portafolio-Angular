import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';    //imports for ngFor
import { Project } from '../../models/project';     //import the model to see it
import { ProjectService } from '../../services/projects.service';  //imports the service, in this case for the get
import { global } from '../../services/global';    //imports the global url
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [ProjectService]
})


export class ProjectsComponent implements OnInit {

  public projects: Project[]
  public url: string

  constructor(
    private _projectService: ProjectService   //Declaration of the service as variable type function
  ){
    this.projects = []            //Initialices the project
    this.url = global.url         //Puts the value of the global url
  }

  ngOnInit() {      //When the component is called ll this info will be charged
    this.getAll()      //Will charge always the data of the db when is called this component
  }

  getAll(){
    this._projectService.getProject().subscribe(        //Calls the service - funtion - suscribes the observable
      response => {                       // Respond coorect action
        if(response.projects){           //If there is any project
          this.projects = response.projects         //It saves every db projects on the variable
        }
        //console.log(response)
      },
      error => {                          //Error actions
        console.log(error)
      }
    )
  }

}
