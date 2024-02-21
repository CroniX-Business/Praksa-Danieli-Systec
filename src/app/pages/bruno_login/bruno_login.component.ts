import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { config } from '../../configs/app.config';
import { languages } from '../../configs/app-languages.config';

@Component({
  selector: 'app-bruno-login',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    ReactiveFormsModule,
  ],
  templateUrl: './bruno_login.component.html',
  styleUrl: './bruno_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrunoLoginComponent{

  time = new Date()
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.minLength(7),Validators.required])
  })
  config = config
  languages = languages
  fieldTextType: boolean=false;

  

  toggleFieldTextType(){
    this.fieldTextType= !this.fieldTextType
  }

  log(){
    console.log(this.form.value)
  }

}