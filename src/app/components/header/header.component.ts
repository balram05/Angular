import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
// import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @HostListener("click",['$event'])
  show(){
    alert("you just clicked")
  }
}
