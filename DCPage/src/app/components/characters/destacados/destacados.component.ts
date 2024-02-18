import { Component } from '@angular/core';
import { Personaje } from '../services/personaje';
import { PersonajeService } from '../services/personaje.service';
import { randomColor } from '../services/randomCol';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent {
  personajes: Personaje[] = [];

  constructor(private personajeService: PersonajeService) {}

  get4Personajes(): void {
    this.personajeService.get4Personajes()
        .subscribe(person => this.personajes = person);
  }

  ngOnInit(): void {
    this.get4Personajes();
  }

  randomColor = randomColor;
}
