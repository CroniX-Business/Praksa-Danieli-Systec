import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarioLoginComponent } from "./pages/dario_login/dario_login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DarioLoginComponent]
})
export class AppComponent {
  public title: string = 'my-angular-project';
}
