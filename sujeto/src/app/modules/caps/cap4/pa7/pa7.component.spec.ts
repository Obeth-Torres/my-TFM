import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa7Component } from './pa7.component';

describe('Pa7Component', () => {
  let component: Pa7Component;
  let fixture: ComponentFixture<Pa7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
