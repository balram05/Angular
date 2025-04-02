import { Component, ViewEncapsulation } from '@angular/core';
// import { ChlidoneComponent } from '../chlidone/chlidone.component';
import { ChildtwoComponent } from '../childtwo/childtwo.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-parent',
  imports: [
    // ChlidoneComponent,
    ChildtwoComponent,
    CommonModule
  ],
  templateUrl: './parrent.component.html',
  styleUrl: './parrent.component.css',
  //encapsulation in meta data
  encapsulation: ViewEncapsulation.None,

})

export class ParentComponent {
  datachild: any
  setdata(data: string) {
    this.datachild = data
  }
  isvalid = false
  clicking() {
    this.isvalid = !this.isvalid
    // console.log("button is clicked")
  }

  // here i am taking the user name

  username: string = "virat kohil"

  // here i am using an array for @for loop

  //  arr:string[]=[
  //   "sachin","virat","dhoni","rohit"
  // ]
  student: any[] = [{
    id: 0,
    name: "ram",
    age: 20
  }, {
    id: 1,
    name: "bal",
    age: 19
  }, {
    id: 2,
    name: "balram",
    age: 21
  }, {
    id: 3,
    name: "rambal",
    age: 22
  }
  ]
}
