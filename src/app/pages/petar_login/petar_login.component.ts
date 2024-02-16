import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
export class PetarLoginComponent {
  appConfig = AppConfig;
  appLanguages = AppLanguages;

  show: boolean = true;
  togglePasswordVisibility() {
    this.show = !this.show;    
  }

  applyForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  submitApplication() {
    const username = this.applyForm.value.username ?? '';
    const password = this.applyForm.value.password ?? '';
  }
  
}
