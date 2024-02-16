import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
export class BrunoLoginComponent implements OnInit {

  time = new Date()
  form: any
  config = config
  languages = languages
  fieldTextType: boolean=false;

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  toggleFieldTextType(){
    this.fieldTextType= !this.fieldTextType
  }

  log(){
    console.log(this.form.controls.username.value.toString())
    console.log(this.form.controls.password.value.toString())
  }

}