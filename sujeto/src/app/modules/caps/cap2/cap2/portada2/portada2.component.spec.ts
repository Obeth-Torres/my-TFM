import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portada2Component } from './portada2.component';

describe('Portada2Component', () => {
  let component: Portada2Component;
  let fixture: ComponentFixture<Portada2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portada2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portada2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
