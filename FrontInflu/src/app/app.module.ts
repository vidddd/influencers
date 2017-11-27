import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar.component';
import { FooterComponent } from './components/layout/footer.component';
import { HomeComponent } from './components/home/home.component';
import { InstagramAuthenticationCallbackComponent } from './components/instagram-authentication-callback/instagram-authentication-callback.component';
import { InfluencersComponent } from './components/influencers/influencers.component';
import { SearchComponent } from './components/search/search.component';
import { InfluencerComponent } from './components/influencer/influencer.component';
import { SidebarComponent } from './components/layout/sidebar.component';

import { InstagramService } from './services/instagram.service';
import { ApiService } from './services/api.service';

import { APP_ROUTING } from './app.routes';
import { KeysPipe } from './pipes/keys.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { MediaComponent } from './components/media/media.component';

@NgModule({
  declarations: [
    AppComponent,NavbarComponent,FooterComponent,HomeComponent,InstagramAuthenticationCallbackComponent,InfluencersComponent,SearchComponent,InfluencerComponent,KeysPipe,SidebarComponent,ReversePipe,
    MediaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, APP_ROUTING
  ],
  providers: [ InstagramService, ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
