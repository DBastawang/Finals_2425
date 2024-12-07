import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';
import { RecordsOfClassComponent } from './records-of-class/records-of-class.component';

export const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'view-user-profile', component: ViewUserProfileComponent},
  {path: 'class-record', component:RecordsOfClassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
