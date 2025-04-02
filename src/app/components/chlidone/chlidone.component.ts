import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { ChildtwoComponent } from '../childtwo/childtwo.component';
@Component({
  selector: 'app-chlidone',
  imports: [
    // ChildtwoComponent,
    CommonModule
  ],
  templateUrl: './chlidone.component.html',
  styleUrl: './chlidone.component.css',
  inputs:["valuedata"]
})
export class ChlidoneComponent {
 valuedata:any

 //here i am creat a array to display in the child component
 arraydata=["one","two","three","four","five"]

 arraydata1=[{
    name:"one",
    value:"1"
  },
  {
    name:"two",
    value:"2" 
 }]
//  here i creating the function to disply different colors 
// ts function syntax with return type
// string | null are the type annotation for typescript        
differenColors(data:any): string | null {
  debugger;
switch(data){

  case "one":
    return "cyan";
  case "two":
    return "green";
  case "three":
    return "yellow";
  case "four":
    return "pink";
  case "five":
    return "orange";
    default:
      return null;
  }
}
 mycolor:any= "ram"
}

