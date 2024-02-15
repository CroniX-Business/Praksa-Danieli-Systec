import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  copyrightDate: string | "2024" = "2024";
  Name=["English","Hrvatski","Deutsch"];
  Code=["En","Hr","De"];
  
}
