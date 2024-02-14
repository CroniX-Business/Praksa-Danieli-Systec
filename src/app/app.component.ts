import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DominikComponentComponent } from "./Components/dominik-component/dominik-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DominikComponentComponent]
})
export class AppComponent {
  title = 'my-angular-project';
}
