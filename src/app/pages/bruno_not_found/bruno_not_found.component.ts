import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutesConfig } from '../../configs/app-routes.config';

@Component({
  selector: 'app-bruno-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bruno_not_found.component.html',
  styleUrl: './bruno_not_found.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrunoNotFoundComponent {
  public routes = AppRoutesConfig;
}
