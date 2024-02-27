import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-petar-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './petar_homepage.component.html',
  styleUrl: './petar_homepage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetarHomepageComponent {}
