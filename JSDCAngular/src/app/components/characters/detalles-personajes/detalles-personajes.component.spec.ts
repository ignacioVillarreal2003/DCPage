import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPersonajesComponent } from './detalles-personajes.component';

describe('DetallesPersonajesComponent', () => {
  let component: DetallesPersonajesComponent;
  let fixture: ComponentFixture<DetallesPersonajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesPersonajesComponent]
    });
    fixture = TestBed.createComponent(DetallesPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
