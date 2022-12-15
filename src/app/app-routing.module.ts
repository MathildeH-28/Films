import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LetterBarComponent } from './letter-bar/letter-bar.component';
import { StarwarsComponent } from './starwars/starwars.component';
import { FilmsComponent } from './films/films.component';
import { PersoComponent } from './perso/perso.component';
import { VvComponent } from './vv/vv.component';
import { EspeceComponent } from './espece/espece.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'films', component: FilmsComponent },
    { path: 'perso', component: PersoComponent },
    { path: 'vv', component: VvComponent },
    { path: 'espece', component: EspeceComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
