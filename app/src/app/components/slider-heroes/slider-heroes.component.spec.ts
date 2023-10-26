import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHeroesComponent } from './slider-heroes.component';

describe('SliderHeroesComponent', () => {
  let component: SliderHeroesComponent;
  let fixture: ComponentFixture<SliderHeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderHeroesComponent]
    });
    fixture = TestBed.createComponent(SliderHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
