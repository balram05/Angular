import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Event } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name=""
handleChange(val:string){
  console.log("the value is "+val)
  this.name = val

}
myName="balram"
message:string="welcom to angular tutorial"
setMessage(value:string){
this.message=value
// console.log(this.message)
}
}

