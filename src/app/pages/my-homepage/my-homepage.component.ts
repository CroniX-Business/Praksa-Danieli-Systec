import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-my-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './my-homepage.component.html',
  styleUrl: './my-homepage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyHomepageComponent {}
