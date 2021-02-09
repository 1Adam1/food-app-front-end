import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication/guards/authentication.guard';
import { NotAuthenticatedUserGuard } from './authentication/guards/not-authenticated-user.guard';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthenticatedUserAppComponent } from './components/authenticated-user-app/authenticated-user-app.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthenticatedUserGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotAuthenticatedUserGuard]
  },
  {
    path: 'app',
    component: AuthenticatedUserAppComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'me',
    component: UserInfoComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'me/edit',
    component: UserEditComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: '**',
    redirectTo: '/app'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
