import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  user = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false
  };

  onSubmit(){
    console.log('Form Submitted', this.user);
    alert('Registration Succesful!');
  }
}
