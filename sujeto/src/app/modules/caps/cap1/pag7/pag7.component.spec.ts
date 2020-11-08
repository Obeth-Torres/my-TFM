import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag7Component } from './pag7.component';

describe('Pag7Component', () => {
  let component: Pag7Component;
  let fixture: ComponentFixture<Pag7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pag7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
