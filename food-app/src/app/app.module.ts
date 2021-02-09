import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticatedUserAppComponent } from './components/authenticated-user-app/authenticated-user-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { RegisterComponent } from './authentication/register/register.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { LoadingContentComponent } from './components/shared/loading-content/loading-content.component';
import { AppHeaderBarComponent } from './components/app-header-bar/app-header-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthenticatedUserAppComponent,
    RegisterComponent,
    UserEditComponent,
    UserInfoComponent,
    LoadingContentComponent,
    AppHeaderBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
