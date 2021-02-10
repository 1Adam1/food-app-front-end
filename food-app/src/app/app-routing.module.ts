import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication/guards/authentication.guard';
import { NotAuthenticatedUserGuard } from './authentication/guards/not-authenticated-user.guard';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthenticatedUserAppComponent } from './components/authenticated-user-app/authenticated-user-app.component';
import { HomeComponent } from './components/home/home.component';
import { MealsListComponent } from './components/meal/meals-list/meals-list.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ShoppingListsListComponent } from './components/shopping-list/shopping-lists-list/shopping-lists-list.component';
import { ShopsListComponent } from './components/shop/shops-list/shops-list.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { ShopInfoComponent } from './components/shop/shop-info/shop-info.component';
import { ShopCreateComponent } from './components/shop/shop-create/shop-create.component';
import { ShopEditComponent } from './components/shop/shop-edit/shop-edit.component';
import { ProductInfoComponent } from './components/product/product-info/product-info.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';

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
        component: HomeComponent,
        data: {
          markedSideMenuItemName: 'Home',
          pageTitle: 'Home'
        }
      },
      {
        path: 'me',
        component: UserInfoComponent,
        data: {
          markedSideMenuItemName: '',
          pageTitle: 'My data'
        }
      },
      {
        path: 'me/edit',
        component: UserEditComponent,
        data: {
          markedSideMenuItemName: '',
          pageTitle: 'My data - edit'
        }
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          markedSideMenuItemName: 'Home',
          pageTitle: 'Home page'
        }
      },
      {
        path: 'products',
        component: ProductListComponent,
        data: {
          markedSideMenuItemName: 'Products',
          pageTitle: 'List of products'
        }
      },
      {
        path: 'products/new',
        component: ProductCreateComponent,
        data: {
          markedSideMenuItemName: 'Products',
          pageTitle: 'Product - new'
        }
      },
      {
        path: 'products/:id',
        component: ProductInfoComponent,
        data: {
          markedSideMenuItemName: 'Products',
          pageTitle: 'Product - info'
        }
      },
      {
        path: 'products/:id/edit',
        component: ProductEditComponent,
        data: {
          markedSideMenuItemName: 'Products',
          pageTitle: 'Product - edit'
        }
      },
      {
        path: 'shops',
        component: ShopsListComponent,
        data: {
          markedSideMenuItemName: 'Shops',
          pageTitle: 'List of shops'
        }
      },
      {
        path: 'shops/:id',
        component: ShopInfoComponent,
        data: {
          markedSideMenuItemName: 'Shops',
          pageTitle: 'Shop - info'
        }
      },
      {
        path: 'shops/new',
        component: ShopCreateComponent,
        data: {
          markedSideMenuItemName: 'Shops',
          pageTitle: 'Shop - new'
        }
      },
      {
        path: 'shops/:id/edit',
        component: ShopEditComponent,
        data: {
          markedSideMenuItemName: 'Shops',
          pageTitle: 'Shop - edit'
        }
      },
      {
        path: 'shopping-lists',
        component: ShoppingListsListComponent,
        data: {
          markedSideMenuItemName: 'Shopping lists',
          pageTitle: 'List of shopping lists'
        }
      },
      {
        path: 'meals',
        component: MealsListComponent,
        data: {
          markedSideMenuItemName: 'Meals',
          pageTitle: 'List of meals'
        }
      },
      {
        path: '**',
        redirectTo: 'home',
        data: {
          markedSideMenuItemName: 'Home',
          pageTitle: 'Home'
        }
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
