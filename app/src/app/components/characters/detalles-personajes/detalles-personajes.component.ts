import { Component, Input } from '@angular/core';
import { Personaje } from '../personajes/personaje';
import { randomColor } from '../personajes/randomCol';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PersonajeService } from '../personajes/personaje.service';

@Component({
  selector: 'app-detalles-personajes',
  templateUrl: './detalles-personajes.component.html',
  styleUrls: ['./detalles-personajes.component.css']
})
export class DetallesPersonajesComponent {
  @Input() personaje?: Personaje;

  randomColor = randomColor;

  constructor(
    private route: ActivatedRoute,
    private personajeService: PersonajeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPersonajes();
  }
  
  getPersonajes(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personajeService.getPersonaje(id)
      .subscribe(personaje => this.personaje = personaje);
  }

  goBack(): void{
    this.location.back();
  }
}
