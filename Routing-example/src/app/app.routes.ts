import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'abouts', component:AboutComponent},
    {path: 'sign-up', component:RegistrationComponent},
    {path: 'profile', component:UserProfileComponent},
];

