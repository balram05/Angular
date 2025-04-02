import { Routes } from '@angular/router';
import { TestoneComponent } from './components/testone/testone.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    // {path:"testone",component:TestoneComponent}
    {path:"",component:HomeComponent},
    {path:"test",component:TestoneComponent },
    {path:"login",component:LoginComponent},
    
    // {path:"signin",component:""},
];
