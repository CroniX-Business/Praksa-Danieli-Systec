import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DominikComponentComponent } from "../components/dominik-component/dominik-component.component";
import { PetarComponentComponent } from "../components/petar-component/petar-component.component";
import { DarioComponentComponent } from "../components/dario-component/dario-component.component";
import { DraganComponent } from '../components/dragan/dragan.component';
import { BrunoCalculatorComponent } from '../components/bruno-calculator/bruno-calculator.component';
import { DominikLoginComponent } from './pages/Dominik_login/Dominik_login.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PetarComponentComponent, DominikComponentComponent, DarioComponentComponent,DraganComponent,BrunoCalculatorComponent, DominikLoginComponent],
    
})
     
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
