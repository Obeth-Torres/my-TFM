import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa14Component } from './pa14.component';

describe('Pa14Component', () => {
  let component: Pa14Component;
  let fixture: ComponentFixture<Pa14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
