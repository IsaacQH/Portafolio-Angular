import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project} from "../models/project";
import { global } from "./global";

@Injectable()
export class ProjectService{
    public url:string

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url
    }

    testService(){
        return "Checking for Project Service"
    }

    saveProject(project: Project):Observable<any>{
        let params = JSON.stringify(project)     //Converts the object to a string JSON
        let headers = new HttpHeaders().set('Content-type', 'application/json')  //Headers condifuration that send the json
                                          //URL where the post is required, post on the backend
        return this._http.post(this.url + 'saveProject', params, {headers:headers})  //Creates a POST and puts the params on the url and organize the headers por http
      }

    getProject():Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json')

        return this._http.get(this.url + 'getAll', {headers:headers})
    }

    getDetailProject(id:any): Observable<any>{         //Obtain the id for detailed project
        let headers = new HttpHeaders().set('Content-type', 'application/json')

        return this._http.get(this.url + 'getProject/' + id, {headers: headers})
    }

    deleteProject(id:any): Observable<any>{      //Deleting project function
        let headers = new HttpHeaders().set('Content-type', 'application/json')

        return this._http.delete(this.url + 'deleteProject/' + id, {headers: headers})  //Will delete the project
    }

}