import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';



@Component({
  selector: 'app-dominik-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dominik-component.component.html',
  styleUrl: './dominik-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class DominikComponentComponent { 
  display='0';
  firstNumber: number | 0 = 0;
  secondNumber: number | 0 = 0;
  math: string | null = null;
  calculated: boolean | false = false;
  number_click(val: string){
    if (this.display=='0'){
      this.display=val
    }
    else{
      if (this.calculated==false)
        this.display+=val
    }
  }
  math_function(val: string){
    if (this.display!='0' && this.math==null){
      this.display+=val
      this.math=val
      this.calculated=false
    }
  }
  clear(){
    this.display='0'
    this.math=null
    this.calculated=false
  }
  calculate(){
    if (this.math!=null){ 
    this.calculated=true
    let displayText: string = this.display;
    let displayNumbers: string[] = displayText.split(this.math);
    this.firstNumber = parseFloat(displayNumbers[0]);
    this.secondNumber = parseFloat(displayNumbers[1]);
    switch (this.math){
      
      case "+":
        this.display=String(this.firstNumber+this.secondNumber)
        break
      case "-":
        this.display=String(this.firstNumber-this.secondNumber)
        break
      case "*":
        this.display=String(this.firstNumber*this.secondNumber)
        break  
      case "/":
        this.display=String(this.firstNumber/this.secondNumber)
        break 
    }
    this.math=null
}
  }
}
