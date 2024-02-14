import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent { 
  display = '0';
  firstValue: number | 0 = 0;
  action: string | null = null;
  result: number = 0;

  numClick(val: string) {
    this.display = (this.display === '0' || this.result) ? val : (this.display + '' + val);
  }

  op(action: string) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }

  
  calculate() {
    const a: number = this.firstValue;
    const b: number = parseFloat(this.display);

    if (this.action === 'mul') {
      this.result = a * b;
    }
    else if (this.action === 'dev') {
      this.result = a / b;
    }
    else if (this.action === 'add') {
      this.result = a + b;
    }
    else if (this.action === 'min') {
      this.result = a - b;
    }

    this.firstValue = this.result ?? 0;
    this.display = this.result === undefined ? '' : this.result.toString();
  }

  clear(){
    this.display = '0';
    this.firstValue = 0;
    this.action = null;
  }
  
}