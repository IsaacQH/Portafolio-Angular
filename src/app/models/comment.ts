//This is going to be the model for the MongoDB created. The Collection is called Projects and it is on Project "Primer-Backend" on localhost 3700 (http methods) and localhost 27017 for DB.

export class Comments{
    constructor(
        public _id:string,
        public text:string
    ){
    }
}