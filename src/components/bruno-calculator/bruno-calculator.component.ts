import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-bruno-calculator',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './bruno-calculator.component.html',
  styleUrl: './bruno-calculator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrunoCalculatorComponent implements OnInit {

  input: any;

  ngOnInit(): void {
    this.input = new FormGroup({
      text: new FormControl()
    }
    )
  }

  appendCharacter(buttonElem: any) {
    let inputValue = buttonElem.textContent
    if(this.input.controls.text.value!=null){
      this.input.controls.text.setValue(this.input.controls.text.value+inputValue);
    }else{
      this.input.controls.text.setValue(inputValue)
    }
  }

  evaluateExpression(){
    let result;
    try {
      result=eval(this.input.controls.text.value)
      this.input.controls.text.setValue(result.toString())
    } catch (error) {
      this.input.controls.text.setValue("Invalid")
    }
  }

  removeLastCharacter(){
    let text=this.input.controls.text.value
    if(text===null){
      return
    }
    else if(text==="Invalid"){
      this.input.controls.text.setValue(null)
    }
    else{
      this.input.controls.text.setValue(text.substring(0,text.length-1))
    }
  }

  clearDisplay(){
    this.input.controls.text.setValue(null);
  }
}
