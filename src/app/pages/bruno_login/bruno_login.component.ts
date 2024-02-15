import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-bruno-login',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
  ],
  templateUrl: './bruno_login.component.html',
  styleUrl: './bruno_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrunoLoginComponent { 
  languages=[
    {
      code:"en",
      name:"English"
    },
    {
      code:"de",
      name:"German"
    },
    {
      code:"fr",
      name:"French"
    },
    {
      code:"hr",
      name:"Croatian"
    }
  ]
}