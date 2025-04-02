import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicetwoService {
 sum=0;
  a = 10;
 b= 20;

  constructor() { }

  addition(){
    this.sum= this.a + this.b;
    return this.sum
  }
  subtration(){
    this.sum= this.b - this.a;
    return this.sum
  }
  division(){
    this.sum= this.b/this.a;
    return this.sum
  }

}
