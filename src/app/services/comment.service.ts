import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Comments } from "../models/comment";
import { global } from "./global";

@Injectable()
export class CommentService{
    public url:string

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url
    }


    saveComment(comment:Comments):Observable<any>{
        let params = JSON.stringify(comment)     //Converts the object to a string JSON
        let headers = new HttpHeaders().set('Content-type', 'application/json')  //Headers condifuration that send the json
                                          //URL where the post is required, post on the backend
        return this._http.post(this.url + 'saveComment', params, {headers:headers})  //Creates a POST and puts the params on the url and organize the headers por http
    }

}