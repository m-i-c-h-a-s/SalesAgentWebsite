import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternetPageComponent } from './components/internet-page/internet-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TelephonePageComponent } from './components/telephone-page/telephone-page.component';
import { TvPageComponent } from './components/tv-page/tv-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'telewizja', component: TvPageComponent},
  { path: 'internet', component: InternetPageComponent},
  { path: 'telefon', component: TelephonePageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
