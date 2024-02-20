import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Languages } from '../../configs/app-languages.config';
import { appConfiguration } from '../../configs/app.config';
import { match } from 'node:assert';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-dominik-login',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule, FormsModule
  ],
  templateUrl: './Dominik_login.component.html',
  styleUrl: './Dominik_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DominikLoginComponent { 
  Lan=Languages;
  showPassword=false
  appCnfg=appConfiguration;
  passwordstate = "Password"
  Usernamewarning=""
  Passwordwarning=""
  Usernameselected=false
  Passwordselected=false

  
  
  
  applyform = new FormGroup({
    userName: new FormControl(''),
    userPassword: new FormControl('')
  });

  clickDetect(){
    
    if (document.activeElement === document.getElementById("Password")){
      this.Passwordselected=true
      this.Passwordwarning=""
    }
    else if (this.Passwordselected && this.applyform.value.userPassword==''){
      this.Passwordwarning="Field is required"
    }

    if (document.activeElement === document.getElementById("Username")){
    this.Usernameselected=true
    this.Usernamewarning=""
    }
    else if (this.Usernameselected && this.applyform.value.userName==''){
      this.Usernamewarning="Field is required"
    }
}

  buttonavailability(){
    if (typeof window !== "undefined"){
      
      var button = document.getElementById("loginbtn") as HTMLInputElement | null;
      if (this.applyform.value.userName!='' && this.applyform.value.userPassword!=''){
        button?.removeAttribute('disabled')
      }
      else {
        button?.setAttribute('disabled', '');}
  }
}


  change_pass_state(){
    if (this.passwordstate=="Password"){
      this.passwordstate="Text"
      this.showPassword=true}
    else{
      this.passwordstate="Password"
      this.showPassword=false}
  }
}
