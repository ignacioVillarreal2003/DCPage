import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPeliculasComponent } from './detalles-peliculas.component';

describe('DetallesPeliculasComponent', () => {
  let component: DetallesPeliculasComponent;
  let fixture: ComponentFixture<DetallesPeliculasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesPeliculasComponent]
    });
    fixture = TestBed.createComponent(DetallesPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
