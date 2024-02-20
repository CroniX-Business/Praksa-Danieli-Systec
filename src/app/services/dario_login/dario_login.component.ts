import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppConfig } from '../../../app/configs/app.config';
import { AppLanguagesConfig } from '../../../app/configs/app-languages.config';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-dario-login',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule 
  ],
  templateUrl: './dario_login.component.html',
  styleUrl: './dario_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarioLoginComponent {

  showPassword: Boolean = false;

  appCFG = AppConfig;
  appLCFG = AppLanguagesConfig;


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  loginGroup = new FormGroup(
    {
      password: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required)
    }
  );

  test(){
    console.log(this.loginGroup.value.password, this.loginGroup.value.username);
  }

 }
