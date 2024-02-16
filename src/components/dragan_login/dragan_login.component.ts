import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { appConfig } from '../../app/configs/app.config';
@Component({
  selector: 'app-dragan-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dragan_login.component.html',
  styleUrl: './dragan_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraganLoginComponent {
  passwordVisible:boolean=false
  appConfig=appConfig
  toggleVisibility(){
    this.passwordVisible=!this.passwordVisible;
  }
 }
