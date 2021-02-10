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
import { MealsListComponent } from './components/meal/meals-list/meals-list.component';
import { ShopsListComponent } from './components/shop/shops-list/shops-list.component';
import { ShoppingListsListComponent } from './components/shopping-list/shopping-lists-list/shopping-lists-list.component';
import { SettingsMenuComponent } from './components/shared/settings-menu/settings-menu.component';
import { DataInfoComponent } from './components/data-info/data-info.component';
import { ShopInfoComponent } from './components/shop/shop-info/shop-info.component';
import { ShopCreateComponent } from './components/shop/shop-create/shop-create.component';
import { ShopEditComponent } from './components/shop/shop-edit/shop-edit.component';
import { ProductInfoComponent } from './components/product/product-info/product-info.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MealCreateComponent } from './components/meal/meal-create/meal-create.component';
import { MealEditComponent } from './components/meal/meal-edit/meal-edit.component';
import { MealInfoComponent } from './components/meal/meal-info/meal-info.component';

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
    MealsListComponent,
    ShopsListComponent,
    ShoppingListsListComponent,
    SettingsMenuComponent,
    DataInfoComponent,
    ShopInfoComponent,
    ShopCreateComponent,
    ShopEditComponent,
    ProductInfoComponent,
    ProductEditComponent,
    ProductCreateComponent,
    MealCreateComponent,
    MealEditComponent,
    MealInfoComponent
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
