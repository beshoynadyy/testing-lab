import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { TestSerService } from './test-ser.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  students:number=10;
  // num:number=0;
  addNumbers(num1: number, num2: number): number {
   return num1 + num2;
 }
constructor(public ser:TestSerService){}
ngOnInit(): void {
  this.ser.getComment();
}
changeStudent(){
  timer(2000).subscribe(()=>{
    this.students=1000;
  })
}
// increase(){
//   this.num++;
// }
// decrease(){
//   this.num--;
// }
}
