import { Component } from '@angular/core';
import { MyservicesService } from '../../service/myservices.service';

@Component({
  selector: 'app-servicecall',
  imports: [],
  templateUrl: './servicecall.component.html',
  styleUrl: './servicecall.component.css'
})
export class ServicecallComponent {

  userdata:string[]=[];
  constructor(private services:MyservicesService){}


  getData(){
   this.services.getUsersData().subscribe((response:any)=>{ 
    this.userdata=response.name
    console.log(response.name)
// console.log("array",JSON.parse(this.userdata))
  })
}
}