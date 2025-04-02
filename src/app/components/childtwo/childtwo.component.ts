import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-childtwo',
  imports: [
     CommonModule 
  ],
  templateUrl: './childtwo.component.html',
  styleUrl: './childtwo.component.css',
  outputs:["childdata"]
})
export class ChildtwoComponent {
childdata=new EventEmitter<string>()
  getdata(value:string){
    // console.log("value",value)
    this.childdata.emit(value)
  }
}
