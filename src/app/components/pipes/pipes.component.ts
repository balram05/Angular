import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Custompipe } from '../custompipe/pipe.pipe'; 
@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    Custompipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  name:string="balram";

  // pipe with an object
  hero:object={
    name:"batman",
    age:25,
    city:"gotham",
    superpower:"money"
  }
//pipe with an array of object
  heroes:any[]=[
    {name:"batman",age:25,city:"gotham",superpower:"money", id:0},
    {name:"superman",age:35,city:"metropolis",superpower:"flying", id:2},
    {name:"flash",age:30,city:"central city",superpower:"speed", id:1},  ]

    //pipe for decimaland percentage
    bigNumber:number=234.82380756

    value:number=67.89;

    dateValue: Date = new Date();

inputdata:string=" "

    getvalue(data:string):void{
      console.log(this.inputdata)
this.inputdata=data
    }

    // to get the current date
    currentDate=new Date();
    
}
