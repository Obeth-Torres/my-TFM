import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa11Component } from './pa11.component';

describe('Pa11Component', () => {
  let component: Pa11Component;
  let fixture: ComponentFixture<Pa11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
