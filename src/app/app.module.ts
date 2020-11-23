import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    FooterComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    SidebarComponent,
    MainContentComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
