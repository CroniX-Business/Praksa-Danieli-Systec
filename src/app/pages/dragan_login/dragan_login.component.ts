import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { appConfig } from '../../configs/app.config';
import { FormGroup, FormsModule } from '@angular/forms';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-dragan-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dragan_login.component.html',
  styleUrl: './dragan_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraganLoginComponent {
  public myData = {
    username: '',
    password: '',
  };
  public myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  public passwordVisible: boolean = false;
  public appConfig = appConfig;
  public toggleVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
