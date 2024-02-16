import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Languages } from '../../configs/app-languages.config';
import { appConfiguration } from '../../configs/app.config';
@Component({
  selector: 'app-dominik-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Dominik_login.component.html',
  styleUrl: './Dominik_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DominikLoginComponent { 
  Lan=Languages;
  appCnfg=appConfiguration;
}
