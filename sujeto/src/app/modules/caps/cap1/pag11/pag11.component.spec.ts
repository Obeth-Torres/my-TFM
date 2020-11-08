import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag11Component } from './pag11.component';

describe('Pag11Component', () => {
  let component: Pag11Component;
  let fixture: ComponentFixture<Pag11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pag11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
