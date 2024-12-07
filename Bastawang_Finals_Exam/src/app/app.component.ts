import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterLinkActive,RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bastawang_Finals_Exam';
}
