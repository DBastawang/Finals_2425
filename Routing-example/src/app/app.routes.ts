import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Component,NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'abouts', component:AboutComponent},
    {path: 'sign-up', component:RegistrationComponent},
    {path: 'profile', component:UserProfileComponent},
    {path: 'login', component:LoginComponent},
    {path: 'service', component:ServicesComponent},
    {path: 'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
