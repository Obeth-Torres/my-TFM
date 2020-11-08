import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa6Component } from './pa6.component';

describe('Pa6Component', () => {
  let component: Pa6Component;
  let fixture: ComponentFixture<Pa6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
