import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasDestacadasComponent } from './peliculas-destacadas.component';

describe('PeliculasDestacadasComponent', () => {
  let component: PeliculasDestacadasComponent;
  let fixture: ComponentFixture<PeliculasDestacadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculasDestacadasComponent]
    });
    fixture = TestBed.createComponent(PeliculasDestacadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
