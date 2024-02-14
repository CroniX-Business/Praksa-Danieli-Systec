import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DominikComponentComponent } from "../components/dominik-component/dominik-component.component";
import { PetarComponentComponent } from "../components/petar-component/petar-component.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PetarComponentComponent, DominikComponentComponent]
})
export class AppComponent {
  title = 'my-angular-project';
}
