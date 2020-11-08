import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag6Component } from './pag6.component';

describe('Pag6Component', () => {
  let component: Pag6Component;
  let fixture: ComponentFixture<Pag6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pag6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
