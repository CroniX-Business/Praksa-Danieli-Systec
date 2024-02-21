import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetarLoginComponent } from './pages/petar_login/petar_login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, PetarLoginComponent],
})
export class AppComponent {
  public title: string = 'my-angular-project';
}
