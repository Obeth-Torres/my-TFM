import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portada4Component } from './portada4.component';

describe('Portada4Component', () => {
  let component: Portada4Component;
  let fixture: ComponentFixture<Portada4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portada4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portada4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
