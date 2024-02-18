import { Component } from '@angular/core';
import { Pelicula } from '../services/pelicula';
import { PeliculasService } from '../services/peliculas.service';


@Component({
  selector: 'app-peliculas-destacadas',
  templateUrl: './peliculas-destacadas.component.html',
  styleUrls: ['./peliculas-destacadas.component.css']
})
export class PeliculasDestacadasComponent {
  peliculasDestacadas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) {}

  get5Peliculas(): void {
    this.peliculasService.get5Peliculas()
        .subscribe(pelicula => this.peliculasDestacadas = pelicula);
  }

  ngOnInit(): void {
    this.get5Peliculas();
  }




}
