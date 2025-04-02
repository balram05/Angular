import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
@Component({
  selector: 'app-apicalls',
  imports: [],
  templateUrl: './apicalls.component.html',
  styleUrl: './apicalls.component.css'
})
export class ApicallsComponent {

  getUsers:any[]=[];

  myVariable:number=0;




//create a dependency injection for the HttpCient
constructor(private http: HttpClient) { 
this.getData();
}
//create a function to make a get request to the server
getData(){
  debugger;
  this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments").subscribe((respones:any)=>{
    debugger;
    console.log("respones",respones);
this.getUsers=respones;
// console.log(this.getEmails);
 })
}


}
