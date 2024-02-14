import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-petar-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './petar-component.component.html',
  styleUrl: './petar-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetarComponentComponent { 
  display = '0';
  firstValue: number | 0 = 0;
  action: string | null = null;
  result: number = 0;
  isButtonDisabled: boolean = false;
  isButtonPressed: boolean = false;


  numClick(val: string) {
    if(this.isButtonPressed){
      this.display = '';
    }
    this.display = (this.display === '0') ? val : (this.display + '' + val);
    this.isButtonPressed = false;
  }

  op(action: string) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.isButtonDisabled = true;
    this.display = '';
  }

  
  calculate() {
    const a: number = this.firstValue;
    const b: number = parseFloat(this.display);

    if (this.action === 'mul') {
      this.result = a * b;
      this.isButtonDisabled = false;
    }
    else if (this.action === 'dev') {
      this.result = a / b;
      this.isButtonDisabled = false;
    }
    else if (this.action === 'add') {
      this.result = a + b;
      this.isButtonDisabled = false;
    }
    else if (this.action === 'min') {
      this.result = a - b;
      this.isButtonDisabled = false;
    }

    this.firstValue = this.result ?? 0;
    this.display = this.result === undefined ? '' : this.result.toString();
    this.isButtonPressed = true;
  }

  clear(){
    this.display = '0';
    this.firstValue = 0;
    this.action = null;
    this.isButtonDisabled = false;
  }
  
}