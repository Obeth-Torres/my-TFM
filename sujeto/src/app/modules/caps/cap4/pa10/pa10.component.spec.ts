import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa10Component } from './pa10.component';

describe('Pa10Component', () => {
  let component: Pa10Component;
  let fixture: ComponentFixture<Pa10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
