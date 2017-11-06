import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { InstagramService } from './services/instagram.service';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
//import { InstagramAuthenticationCallbackComponent } from './components/instagram-authentication-callback/instagram-authentication-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsComponent,
    NavbarComponent,
    FooterComponent,
  //  InstagramAuthenticationCallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
