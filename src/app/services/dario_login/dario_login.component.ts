import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dario-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dario_login.component.html',
  styleUrl: './dario_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarioLoginComponent { }
