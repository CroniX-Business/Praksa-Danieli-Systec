import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Languages } from '../../../configs/app-languages.config';
import { appConfiguration } from '../../../configs/app.config';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import {
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-dominik-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './Dominik_register.component.html',
  styleUrl: './Dominik_register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DominikRegisterComponent {
  public Lan = Languages;
  public showPassword = false;
  public appCnfg = appConfiguration;
  public loginMsg = '';

  public applyform = new FormGroup({
    userName: new FormControl(''),
    userPassword: new FormControl(''),
  });

  public submitFunction(): void {}
}
