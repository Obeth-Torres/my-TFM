import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa5Component } from './pa5.component';

describe('Pa5Component', () => {
  let component: Pa5Component;
  let fixture: ComponentFixture<Pa5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
