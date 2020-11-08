import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa16Component } from './pa16.component';

describe('Pa16Component', () => {
  let component: Pa16Component;
  let fixture: ComponentFixture<Pa16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
