import { Component } from '@angular/core';
// import { HeaderComponent } from './components/header/header.component';
// import { RouterOutlet } from '@angular/router';
// import { ParentComponent } from './components/parrent/parrent.component';
// import { ChlidoneComponent } from './components/chlidone/chlidone.component';
// import { ChildtwoComponent } from './components/childtwo/childtwo.component';
// import { BindingComponent } from './components/binding/binding.component';
// import { ApicallsComponent } from './components/apicalls/apicalls.component';
// import{PipesComponent} from './components/pipes/pipes.component';
// import { ServicecallComponent } from './components/servicecall/servicecall.component';
import { HomeComponent } from './components/home/home.component';
@Component({
  selector: 'app-root',
  imports: [
    // HeaderComponent, RouterOutlet
    // ParentComponent,
    // ChlidoneComponent,
    // ChildtwoComponent,
    // BindingComponent,
    // ApicallsComponent,
    // PipesComponent,
    // ServicecallComponent,
    HomeComponent


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial';
}