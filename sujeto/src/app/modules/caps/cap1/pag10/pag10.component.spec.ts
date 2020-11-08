import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag10Component } from './pag10.component';

describe('Pag10Component', () => {
  let component: Pag10Component;
  let fixture: ComponentFixture<Pag10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pag10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
