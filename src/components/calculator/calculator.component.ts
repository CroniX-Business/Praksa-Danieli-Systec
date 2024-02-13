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

  numClick(val: string) {
    if (this.display === '0') {
      this.display = val;
    } else {
      this.display = `${this.display}${val}`;
    }
  }

  op(action: string) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }

  calculate() {
    const a: number = this.firstValue;
    const b = parseFloat(this.display);

    console.log(a);
    console.log(b);

    let result;
    if (this.action === 'mul') {
      result = a * b;
    }
    else if (this.action === 'dev') {
      result = a / b;
    }
    else if (this.action === 'add') {
      result = a + b;
      console.log(result);
    }
    else if (this.action === 'min') {
      result = a - b;
    }

    this.firstValue = result ?? 0;
    this.display = result === undefined ? '' : result.toString();
  }

  clear(){
    this.display = '0';
    this.firstValue = 0;
    this.action = null;
  }
  
}