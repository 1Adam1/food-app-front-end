import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication/guards/authentication.guard';
import { AuthenticatedUserAppComponent } from './components/authenticated-user-app/authenticated-user-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotAuthenticatedUserGuard } from './authentication/guards/not-authenticated-user.guard';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { RegisterComponent } from './authentication/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
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
    path: 'home',
    component: AuthenticatedUserAppComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthenticatedUserAppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
