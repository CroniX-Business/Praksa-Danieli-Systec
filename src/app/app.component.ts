import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrunoCalculatorComponent } from '../components/bruno-calculator/bruno-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BrunoCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}
