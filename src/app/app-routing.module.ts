import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ShopItemsComponent } from './components/shop-items/shop-items.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',redirectTo:'/index', pathMatch:'full'},
  {path:'index', component:ShopItemsComponent},
  

  { path: 'item-details', component: ItemDetailsComponent },
  { path: 'item-details/:id', component: ItemDetailsComponent },

  { path: 'user/sign-in', component: SignInComponent },
  { path: 'user/sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
