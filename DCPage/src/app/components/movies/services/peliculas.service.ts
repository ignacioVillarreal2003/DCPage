import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula';
import { Peliculas } from './peliculas';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  getPeliculas(): Observable<Pelicula[]> {
    const peliculas = of(Peliculas);
    return peliculas;
  }

  getPelicula(id: number): Observable<Pelicula> {
    const pelicula = Peliculas.find(p => p.id === id)!;
    return of(pelicula);
  } 

  get5Peliculas(): Observable<Pelicula[]> {
    const cantidadPeliculas = 5;
    const peliculasDestacadas = [];
    const indicesUsados = new Set();

    while (peliculasDestacadas.length < cantidadPeliculas) {
      const indiceAleatorio = Math.floor(Math.random() * Peliculas.length);

      if (!indicesUsados.has(indiceAleatorio)) {
        indicesUsados.add(indiceAleatorio);
        peliculasDestacadas.push(Peliculas[indiceAleatorio]);
      }
    }

    return of(peliculasDestacadas);
  }


  



}
