import { SignInComponent } from './components/forms-authentication/signIn/signIn.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from './services/api/auth.guard';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationPageComponent,
    children: [
      { path: 'login', component: SignInComponent }
    ]
  },


  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { };
