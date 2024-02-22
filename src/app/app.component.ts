import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DominikLoginComponent } from './pages/Dominik_login/Dominik_login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, DominikLoginComponent],
})
export class AppComponent {
  public title: string = 'my-angular-project';
}
