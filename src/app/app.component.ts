import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetarComponentComponent } from "../components/petar-component/petar-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PetarComponentComponent]
})
export class AppComponent {
  title = 'my-angular-project';
}
