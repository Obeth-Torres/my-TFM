import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa13Component } from './pa13.component';

describe('Pa13Component', () => {
  let component: Pa13Component;
  let fixture: ComponentFixture<Pa13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
