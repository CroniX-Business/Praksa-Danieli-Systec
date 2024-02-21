import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dario-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dario-component.component.html',
  styleUrl: './dario-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarioComponentComponent {
  public display = '';
  public firstValue = '';
  public secondValue = '';
  public result = '';
  public operation = '';
  public flag = false;
  public isButtonDisabled: boolean = false;

  public pressNumber(num: string): undefined {
    if (this.flag) {
      this.display = '';
    }
    this.display += num;
    this.flag = false;
  }

  public doOperation(op: string): void {
    console.log(op);
    if (op != '=' && op != 'C') {
      this.isButtonDisabled = true;
      this.firstValue = this.display;
      this.operation = op as string;
      this.display = '';
    }
    if (op == 'C') {
      this.display = '';
    }
    if (op == '=') {
      this.secondValue = this.display;
      if (this.operation == '+') {
        this.isButtonDisabled = false;
        this.result = (
          parseFloat(this.firstValue) + parseFloat(this.secondValue)
        ).toString();
      }
      if (this.operation == '-') {
        this.isButtonDisabled = false;
        this.result = (
          parseFloat(this.firstValue) - parseFloat(this.secondValue)
        ).toString();
      }
      if (this.operation == '*') {
        this.isButtonDisabled = false;
        this.result = (
          parseFloat(this.firstValue) * parseFloat(this.secondValue)
        ).toString();
      }
      if (this.operation == '/') {
        this.isButtonDisabled = false;
        this.result = (
          parseFloat(this.firstValue) / parseFloat(this.secondValue)
        ).toString();
      }
      this.display = this.result;
      this.flag = true;
    }
  }
}

