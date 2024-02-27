import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dario-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dario_home.component.html',
  styleUrl: './dario_home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarioHomeComponent {}
