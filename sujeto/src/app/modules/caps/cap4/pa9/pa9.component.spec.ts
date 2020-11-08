import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa9Component } from './pa9.component';

describe('Pa9Component', () => {
  let component: Pa9Component;
  let fixture: ComponentFixture<Pa9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
