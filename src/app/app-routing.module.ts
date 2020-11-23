import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

const routes: Routes = [
  //{path:'',redirectTo:'/user/sign-in',pathMatch:'full'},
  {path:'',redirectTo:'/index', pathMatch:'full'},
  {path:'index', component:ComponentsComponent},
  
  { path: 'user/sign-in', component: SignInComponent },
  { path: 'user/sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
