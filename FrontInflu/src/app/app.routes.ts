import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { InfluencersComponent } from './components/influencers/influencers.component';
import { InfluencerComponent } from './components/influencer/influencer.component';


const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'influencers', component: InfluencersComponent },
  { path: 'influencer/:id', component: InfluencerComponent },
  { path: 'view/influencer/:id', component: InfluencerComponent },
  { path: 'add/influencer/:idins', component: InfluencerComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
