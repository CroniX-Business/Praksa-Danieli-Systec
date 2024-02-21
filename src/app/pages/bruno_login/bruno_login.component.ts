import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { config } from '../../configs/app.config';
import { languages } from '../../configs/app-languages.config';

@Component({
  selector: 'app-bruno-login',
  standalone: true,
  imports: [CommonModule, NgFor, ReactiveFormsModule],
  templateUrl: './bruno_login.component.html',
  styleUrl: './bruno_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrunoLoginComponent {
  public time = new Date();
  public form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, [
      Validators.minLength(7),
      Validators.required,
    ]),
  });
  public config = config;
  public languages = languages;
  public fieldTextType: boolean = false;

  public toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  public log(): void {
    console.log(this.form.value);
  }
}
