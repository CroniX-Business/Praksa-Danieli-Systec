import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Languages } from '../../configs/app-languages.config';
import { appConfiguration } from '../../configs/app.config';
import {
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-dominik-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './Dominik_login.component.html',
  styleUrl: './Dominik_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DominikLoginComponent {
  public Lan = Languages;
  public showPassword = false;
  public appCnfg = appConfiguration;

  public applyform = new FormGroup({
    userName: new FormControl(''),
    userPassword: new FormControl(''),
  });

  public submitFunction(): void {}
}
