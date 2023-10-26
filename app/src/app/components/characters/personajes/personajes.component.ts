import { Component } from '@angular/core';
import { Personaje } from './personaje';
import { randomColor } from './randomCol';
import { PersonajeService } from './personaje.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  personajes: Personaje[] = [];

  constructor(private personajeService: PersonajeService) {}

  getPersonajes(): void {
    this.personajeService.getPersonajes()
        .subscribe(personaje => this.personajes = personaje);
  }


  ngOnInit(): void {
    this.getPersonajes();
  }

  randomColor = randomColor;
}

