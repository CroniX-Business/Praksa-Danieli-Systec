import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DominikComponentComponent } from "../components/dominik-component/dominik-component.component";
import { PetarComponentComponent } from "../components/petar-component/petar-component.component";
import { DarioComponentComponent } from "../components/dario-component/dario-component.component";
import { BrunoCalculatorComponent } from '../components/bruno-calculator/bruno-calculator.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PetarComponentComponent, DominikComponentComponent, DarioComponentComponent,BrunoCalculatorComponent]
})
export class AppComponent {
  title = 'my-angular-project';
}
