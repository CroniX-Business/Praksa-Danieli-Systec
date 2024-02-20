import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppConfig } from '../../configs/app.config';
import { AppLanguagesConfig } from '../../configs/app-languages.config';
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


  loginGroup = new FormGroup(
    {
      password: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required)
    }
  );

 }
