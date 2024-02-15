import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-petar-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './petar_login.component.html',
  styleUrl: './petar_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetarLoginComponent { 
  /*togglePasswordVisibility(input: HTMLInputElement) {
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }*/
  
}
