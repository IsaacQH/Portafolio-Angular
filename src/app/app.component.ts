import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Import component:
import { AboutComponent} from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //Remember import necessary
  imports: [CommonModule, RouterOutlet, AboutComponent, ContactComponent, CreateComponent, ProjectsComponent, ErrorComponent,RouterModule, HttpClientModule, FormsModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio-Angular';
}
