import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa15Component } from './pa15.component';

describe('Pa15Component', () => {
  let component: Pa15Component;
  let fixture: ComponentFixture<Pa15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
