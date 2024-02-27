import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bruno-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bruno_not_found.component.html',
  styleUrl: './bruno_not_found.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrunoNotFoundComponent {}
