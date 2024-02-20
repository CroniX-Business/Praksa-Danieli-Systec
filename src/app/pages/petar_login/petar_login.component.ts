import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppConfig } from '../../config/app.config';
import { AppLanguages } from '../../config/app.languages';

@Component({
  selector: 'app-petar-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './petar_login.component.html',
  styleUrl: './petar_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetarLoginComponent{
  appConfig = AppConfig;
  appLanguages = AppLanguages;

  show: boolean = true;

  applyForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });  

  submitApplication() {
    const username = this.applyForm.value.username;
    const password = this.applyForm.value.password;

    console.log(username);
    console.log(password);

    this.applyForm.reset();
  }
}

