import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnyARecord } from 'dns';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `

  `,
  styleUrl: './calculator.component.css',
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent { 
  display='0'
  appendNum(val:any){
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
  }
  clear(){
    this.display='0'
  }
}
