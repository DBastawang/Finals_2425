  import { Component } from '@angular/core';
  import { HomeComponent } from './home/home.component';
  import { AboutComponent } from './about/about.component';
  import { LoginComponent } from './login/login.component';
  import { RegistrationComponent } from './registration/registration.component';
  import { UserProfileComponent } from './user-profile/user-profile.component';
  import { ListLeftComponent } from './list-left/list-left.component';
  import { ListRightComponent } from './list-right/list-right.component';
  import { HeaderComponent } from './header/header.component';
  import { FooterComponent } from './footer/footer.component';
  import { RouterLink, RouterLinkActive,RouterModule,RouterOutlet } from '@angular/router';
  import { ReactiveFormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { Service } from './service';


  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule,
    ReactiveFormsModule,
    CommonModule,
    FooterComponent,
    ListRightComponent,
    ListLeftComponent,
    HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {
    title = 'Routing-example';
  }

  export class ServiceComponent {
    service: Service[] = [
      { id: 1, name: 'Haircut', description: 'gupit', price: 100.00 },
      { id: 2, name: 'Haircolor', description: 'kulay', price: 100.00 }
    ];
    selectService: Service | null = null;

    viewServiceDetails(service: Service):any{

    }
  }

