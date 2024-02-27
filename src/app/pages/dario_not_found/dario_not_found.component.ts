import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dario-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dario_not_found.component.html',
  styleUrl: './dario_not_found.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarioNotFoundComponent {}
