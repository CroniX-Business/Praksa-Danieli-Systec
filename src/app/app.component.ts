import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DraganComponent } from './components/dragan/dragan.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DraganComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
