import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

import { DominikComponentComponent } from "../components/dominik-component/dominik-component.component";
import { PetarComponentComponent } from "../components/petar-component/petar-component.component";
import { DarioComponentComponent } from "../components/dario-component/dario-component.component";
import { DraganComponent } from '../components/dragan/dragan.component';
import { BrunoCalculatorComponent } from '../components/bruno-calculator/bruno-calculator.component';
import { DraganLoginComponent } from './pages/dragan_login/dragan_login.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PetarComponentComponent, DominikComponentComponent,
         DarioComponentComponent, DraganComponent,BrunoCalculatorComponent, DraganLoginComponent,
        FormsModule,]
=======

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet],
>>>>>>> main
})
export class AppComponent {
  public title: string = 'my-angular-project';
}
