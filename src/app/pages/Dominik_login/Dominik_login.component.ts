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
  copyrightDate = new Date().getFullYear();
  Languages=[{code:"En",name:"English"},{code:"Hr",name:"Hrvatski"},{code:"De",name:"Deutsch"}]
}
