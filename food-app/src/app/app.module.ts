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
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { PersonsListComponent } from './components/persons/persons-list/persons-list.component';
import { MealsListComponent } from './components/meals/meals-list/meals-list.component';
import { ShopsListComponent } from './components/shops/shops-list/shops-list.component';
import { ShoppingListsListComponent } from './components/shopping-list/shopping-lists-list/shopping-lists-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthenticatedUserAppComponent,
    RegisterComponent,
    UserEditComponent,
    UserInfoComponent,
    LoadingContentComponent,
    HeaderBarComponent,
    SideMenuComponent,
    HomeComponent,
    ProductListComponent,
    PersonsListComponent,
    MealsListComponent,
    ShopsListComponent,
    ShoppingListsListComponent
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
