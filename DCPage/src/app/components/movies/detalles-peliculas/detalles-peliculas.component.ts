import { Component, Input } from '@angular/core';
import { Pelicula } from '../services/pelicula';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-detalles-peliculas',
  templateUrl: './detalles-peliculas.component.html',
  styleUrls: ['./detalles-peliculas.component.css']
})
export class DetallesPeliculasComponent {
  @Input() pelicula?: Pelicula;

  constructor(
    private route: ActivatedRoute,
    private peliculaService: PeliculasService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPelicula();
  }
  
  getPelicula(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.peliculaService.getPelicula(id)
      .subscribe(pelicula => this.pelicula = pelicula);
  }
}
