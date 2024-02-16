import { Routes } from '@angular/router';

//Import component:
import { AboutComponent} from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';

//Assigning Routes:These are the routes that the url is going to use and the assingned component
export const routes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'about-me', component: AboutComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'create-project', component: CreateComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'content/:id', component:DetailComponent},
    {path: '**', component: ErrorComponent},
];
