import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { IlumnoComponent } from "./components/ilumno/ilumno.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'ilumno', component: IlumnoComponent },
    { path: '**', pathMatch:'full', redirectTo: 'login' }
];

export const appRouting = RouterModule.forRoot(routes);