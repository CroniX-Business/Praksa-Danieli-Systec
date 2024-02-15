import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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

  toggleVisibility(){
    this.passwordVisible=!this.passwordVisible;
  }
 }
