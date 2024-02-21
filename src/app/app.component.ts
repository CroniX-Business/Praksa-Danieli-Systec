import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrunoLoginComponent } from './pages/bruno_login/bruno_login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, BrunoLoginComponent],
})
export class AppComponent {
  public title: string = 'my-angular-project';
}
