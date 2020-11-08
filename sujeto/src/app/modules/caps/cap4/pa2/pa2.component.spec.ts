import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa2Component } from './pa2.component';

describe('Pa2Component', () => {
  let component: Pa2Component;
  let fixture: ComponentFixture<Pa2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
