import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
vairable:string="hello user";

myArray=["apple","banana","cherry"];

myObject=[
  {
  id:1,
  name:"balram",
  role:"developer"
},
{
  id:2,
  name:"ram",
  role:"software developer"
}
];

myObject1=
  {
  id:1,
  name:"balram",
  role:"software enigneer"
}

// myObject1:any;

city:string="vijayawada";
getCity():void{
this.city="hyderabad";

}

classToApply:string="two"

classToApplymultiple:string="two hello"

isTrue:boolean=true;

color:string="red";

size:string="25 px";

isItalic:boolean=true;

proPerty:boolean=false;

disable():void{
this.proPerty=!this.proPerty;
}

inputValue:string="";

demo():void{
  this.inputValue=this.inputValue;
  console.log(this.inputValue);
}
displayButton:boolean=false;
// console.log(displayButton);
buttonClick():void{
  this.displayButton=!this.displayButton;
  console.log("button click",this.displayButton);
}
myinputValue:string=" ";

getData(data:string){
this.myinputValue=data;
console.log(data);
}
myVariable:string=" ";
myFunction(val:string){
  this.myVariable=val
  console.log(this.myVariable)
}
}
