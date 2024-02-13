import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {

    display = '';
    firstValue: Number | null = null
    secondValue: Number | null = null
    operation = '';

    pressNumber(num: Number){
      
        this.display += num.toString();
    }

    doOperation(op: String){
      if(op=='+'){
        this.firstValue = parseInt(this.display);
        this.display = '';
      }
    }

 }
