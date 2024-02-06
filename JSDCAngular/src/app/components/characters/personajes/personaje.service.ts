import { Injectable } from '@angular/core';
import { Personaje } from './personaje';
import { Personajes } from './personajes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  getPersonajes(): Observable<Personaje[]> {
    const personajes = of(Personajes);
    return personajes;
  }

  getPersonaje(id: number): Observable<Personaje> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const personaje = Personajes.find(p => p.id === id)!;
    return of(personaje);
  }

  get4Personajes(): Observable<Personaje[]> {
    const cantidadPersonajes = 4;
    const personajesDestacadas = [];
    const indicesUsados = new Set();

    while (personajesDestacadas.length < cantidadPersonajes) {
      const indiceAleatorio = Math.floor(Math.random() * Personajes.length);

      // Asegurarse de que no se repitan películas
      if (!indicesUsados.has(indiceAleatorio)) {
        indicesUsados.add(indiceAleatorio);
        personajesDestacadas.push(Personajes[indiceAleatorio]);
      }
    }

    return of(personajesDestacadas);
  }

  constructor() { }
}


