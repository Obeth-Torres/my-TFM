import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa4Component } from './pa4.component';

describe('Pa4Component', () => {
  let component: Pa4Component;
  let fixture: ComponentFixture<Pa4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
