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
    firstValue = '';
    secondValue = '';
    result = '';
    operation = '';

    pressNumber(num : string){
      
        this.display += num;
    }

    doOperation(op: String){
      console.log(op);
      if(op!='=' && op!='C'){
        this.firstValue = this.display;
        this.operation = op as string;
        this.display = '';
      }
      if(op=='C'){
        this.display = '';
      }
      if(op=='='){
          this.secondValue = this.display;
          if(this.operation == '+'){
            this.result = (parseFloat(this.firstValue)+parseFloat(this.secondValue)).toString();
          }
          if(this.operation == '-'){
            this.result = (parseFloat(this.firstValue)-parseFloat(this.secondValue)).toString();
          }
          if(this.operation == '*'){
            this.result = (parseFloat(this.firstValue)*parseFloat(this.secondValue)).toString();
          }
          if(this.operation == '/'){
            this.result = (parseFloat(this.firstValue)/parseFloat(this.secondValue)).toString();
          }
          this.display = this.result;
      }
      
    }

 }
