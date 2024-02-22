import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { appConfig } from '../../configs/app.config';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-dragan-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dragan_register.component.html',
  styleUrl: './dragan_register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraganRegisterComponent {
  public passwordVisible: boolean = true;
  public appConfig = appConfig;

  public registerMessage: string | null = null;
  public myForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
}
