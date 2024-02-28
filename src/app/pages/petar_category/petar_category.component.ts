import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-petar-category',
  standalone: true,
  templateUrl: './petar_category.component.html',
  styleUrl: './petar_category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
})
export class PetarCategoryComponent {}
