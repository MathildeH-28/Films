import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    LetterBarComponent,
    StarwarsComponent,
    FilmsComponent,
    PersoComponent,
    VvComponent,
    EspeceComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
