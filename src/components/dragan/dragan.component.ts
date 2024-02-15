import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnyARecord } from 'dns';

@Component({
  selector: 'dragan',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `

  `,
  styleUrl: './dragan.component.css',
  templateUrl: './dragan.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraganComponent { 
  display='0'
  firstNum:number = 0;
  action:string='';
  isCalculated:boolean=false;

  appendNum(val:any){
    if(this.isCalculated) return;

    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
    this.isCalculated=false
  }
  clear(){
    this.display='0'
    this.isCalculated=false
  }
  operand(action:string){
    this.firstNum=parseInt(this.display);
    this.action=action;
    this.display='0'
    this.isCalculated=false
  }
  calculate(){
    var a=this.firstNum
    var b=parseInt(this.display)
    var result;

    if(this.action=='*'){
      result=a*b;
    }else if(this.action=='/'){
      result=a/b;
    }else if(this.action=='+'){
      result=a+b;
    }else if(this.action=='-'){
      result=a-b;
    }
    if(result != undefined){
    this.firstNum=result;
    this.display=result.toString();
    this.isCalculated=true
    }
  }
}
