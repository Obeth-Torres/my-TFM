import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portada3Component } from './portada3.component';

describe('Portada3Component', () => {
  let component: Portada3Component;
  let fixture: ComponentFixture<Portada3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portada3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portada3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
