import { Component } from '@angular/core';

@Component({
  selector: 'app-testone',
  imports: [],
  templateUrl: './testone.component.html',
  styleUrl: './testone.component.css'
})
export class TestoneComponent {
  // creating properties
  name: string = "balram"
  countNumber: number = 0

  // creating a function for button click 
  welcom() {
    console.log("welcom to angular tutorial")
  }
  count() {
    // creating variable
    let x: number = 30
    console.log("welcome to counts")
    //here we are using the this because of the class components
    this.welcom();
    this.name = "ram"
    //using the template literal
    console.log(`x value is : ${x}`)
    // using string concatenation
    console.log("x value is : " + x);


  }

  sum(a: number, b: number) {
    console.log(a + b)
  }
  // increment(){

  // this.countNumber=this.countNumber + 1
  // console.log(this.countNumber)

  // }
  // decrement(){
  // here i am used the conditional operater insted of tradision if-else 
  //   let decrementvalue :any = this.countNumber <= 0 ?  
  //   alert("can not decrement then " + this.countNumber) : 
  //   this.countNumber=this.countNumber - 1
  // }
  // reset(){
  //   this.countNumber = 0
  // }

  // insted of writing of 3 different functions for incement,decrement,reset
  handelChange(value: string) {
    if (value === "increment") {
      this.countNumber = this.countNumber + 1
    } else if (value === "decrement") {
      if (this.countNumber <= 0) {
        alert("can't decrement the value" + this.countNumber)
      }
      else
        this.countNumber = this.countNumber - 1
    } else {
      this.countNumber = 0
    }

  }
  handelClick(){
    console.log("it is clicked")
  }
  handelOver(){
console.log("it is hoverd")
  }
  handelOut(){
    console.log("mosue is moved out")
  }
  HandelChange(){
    console.log("on changed")
  }
  handelKeyUp(){
    console.log("key up")
  }
  handelkeyDown(){
    console.log("keydown")
  }
}
