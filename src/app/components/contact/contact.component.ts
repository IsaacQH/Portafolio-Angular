import { Component } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comments } from '../../models/comment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [CommentService]
})
export class ContactComponent {

  public title:string     //Creation of title for HTML
  public subtitle:string
  public num: string 
  public mail: string
  public linked: string
  public git: string
  public comment:Comments

  constructor(
    private _commentService:CommentService
  ){
    this.title = "Any questions or comments?"
    this.subtitle = "Contact me"
    this.num = "+52 331 756 1760"
    this.mail = "isaac.qh@gmail.com"
    this.linked ="www.linkedin.com/in/isaac-qh"
    this.git = "https://github.com/IsaacQH"
    this.comment = new Comments("","")
  }

  onSubmit(form:any):any{
    this._commentService.saveComment(this.comment).subscribe(
      response =>{
        console.log(response)
        form.reset()              //Resets the form
      },
      error => {
        console.log("There was an error")   //Prints the error if ther is sone
        console.log(<any>error)   //Prints the error if ther is sone
      }
    )
  }
  
}
