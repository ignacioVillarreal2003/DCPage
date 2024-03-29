import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DetallesPersonajesComponent } from './components/characters/detalles-personajes/detalles-personajes.component';
import { DetallesPeliculasComponent } from './components/movies/detalles-peliculas/detalles-peliculas.component';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'peliculas', component: MoviesComponent},
  { path: 'detalles/:id', component: DetallesPersonajesComponent },
  { path: 'detallesPelicula/:id', component: DetallesPeliculasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }