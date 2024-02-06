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

  /*
  getPeliculas(): Observable<Pelicula[]> {
    const peliculas = of(Peliculas);
    return peliculas;
  }*/

  /*
  getPelicula(id: number): Observable<Pelicula> {
    const pelicula = Peliculas.find(p => p.id === id)!;
    return of(pelicula);
  } */

  get5Peliculas(): Observable<Pelicula[]> {
    const cantidadPeliculas = 5;
    const peliculasDestacadas = [];
    const indicesUsados = new Set();

    while (peliculasDestacadas.length < cantidadPeliculas) {
      const indiceAleatorio = Math.floor(Math.random() * Peliculas.length);

      // Asegurarse de que no se repitan películas
      if (!indicesUsados.has(indiceAleatorio)) {
        indicesUsados.add(indiceAleatorio);
        peliculasDestacadas.push(Peliculas[indiceAleatorio]);
      }
    }

    return of(peliculasDestacadas);
  }
  

  /*constructor() { }*/
  constructor(
    private http: HttpClient) { }

    private peliculasUrl = 'api/peliculas';

  /** GET heroes from the server */
  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.peliculasUrl).pipe(
      tap(_ => this),
      catchError(this.handleError<Pelicula[]>('getPeliculas', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getPelicula(id: number): Observable<Pelicula> {
    const url = `${this.peliculasUrl}/${id}`;
    return this.http.get<Pelicula>(url).pipe(
      tap(_ => this),
      catchError(this.handleError<Pelicula>(`getPelicula id=${id}`))
    );
  }
}
