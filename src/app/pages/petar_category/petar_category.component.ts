import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-petar-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './petar_category.component.html',
  styleUrl: './petar_category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetarCategoryComponent {}
