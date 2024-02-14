import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarioComponentComponent } from "../components/dario-component/dario-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DarioComponentComponent]
})
export class AppComponent {
  title = 'my-angular-project';
}
