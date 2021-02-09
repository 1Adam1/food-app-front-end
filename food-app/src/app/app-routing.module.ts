import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication/guards/authentication.guard';
import { NotAuthenticatedUserGuard } from './authentication/guards/not-authenticated-user.guard';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthenticatedUserAppComponent } from './components/authenticated-user-app/authenticated-user-app.component';
import { HomeComponent } from './components/home/home.component';
import { MealsListComponent } from './components/meals/meals-list/meals-list.component';
import { PersonsListComponent } from './components/persons/persons-list/persons-list.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ShoppingListsListComponent } from './components/shopping-list/shopping-lists-list/shopping-lists-list.component';
import { ShopsListComponent } from './components/shops/shops-list/shops-list.component';
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
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'me',
        component: UserInfoComponent
      },
      {
        path: 'me/edit',
        component: UserEditComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'persons',
        component: PersonsListComponent
      },
      {
        path: 'shops',
        component: ShopsListComponent
      },
      {
        path: 'shopping-lists',
        component: ShoppingListsListComponent
      },
      {
        path: 'meals',
        component: MealsListComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
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
