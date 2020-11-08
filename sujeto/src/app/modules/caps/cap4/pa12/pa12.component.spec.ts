import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa12Component } from './pa12.component';

describe('Pa12Component', () => {
  let component: Pa12Component;
  let fixture: ComponentFixture<Pa12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
