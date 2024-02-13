import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from "../models/project";
import { global } from "./global";

@Injectable()
export class ProjectService {
    public url: string; // URL for API endpoint

    constructor(
        private _http: HttpClient // Injecting HttpClient service
    ){
        this.url = global.url; // Assigning global URL value to local variable
    }

    /**
     * Function to test the Angular service
     * @returns A string confirming the testing of the service
     */
    testService(): string {
        return "Testing the Angular service";
    }
}