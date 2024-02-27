import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dominik-error',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './Dominik_error.component.html',
  styleUrl: './Dominik_error.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DominikErrorComponent {}
