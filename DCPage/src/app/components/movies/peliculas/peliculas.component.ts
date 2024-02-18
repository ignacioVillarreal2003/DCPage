import { Component } from '@angular/core';
import { Pelicula } from '../services/pelicula';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) {}

  getPeliculas(): void {
    this.peliculasService.getPeliculas()
        .subscribe(pelicula => this.peliculas = pelicula);
  }

  ngOnInit(): void {
    this.getPeliculas();
  }
  
}
