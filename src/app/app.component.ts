import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DraganLoginComponent } from './pages/dragan_login/dragan_login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, DraganLoginComponent],
})
export class AppComponent {
  public title: string = 'my-angular-project';
}
