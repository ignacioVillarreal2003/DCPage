import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/header/hero/hero.component';
import { DestacadosComponent } from './components/characters/destacados/destacados.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonajesComponent } from './components/characters/personajes/personajes.component';
import { PeliculasComponent } from './components/movies/peliculas/peliculas.component';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './components/characters/characters.component';
import { DetallesPersonajesComponent } from './components/characters/detalles-personajes/detalles-personajes.component';
import { PeliculasDestacadasComponent } from './components/movies/peliculas-destacadas/peliculas-destacadas.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DetallesPeliculasComponent } from './components/movies/detalles-peliculas/detalles-peliculas.component';
import { SliderHeroesComponent } from './components/slider-heroes/slider-heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './components/movies/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    DestacadosComponent,
    FooterComponent,
    PersonajesComponent,
    PeliculasComponent,
    CharactersComponent,
    DetallesPersonajesComponent,
    PeliculasDestacadasComponent,
    MoviesComponent,
    DetallesPeliculasComponent,
    SliderHeroesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}


