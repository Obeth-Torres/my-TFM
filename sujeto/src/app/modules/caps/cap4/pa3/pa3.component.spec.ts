import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa3Component } from './pa3.component';

describe('Pa3Component', () => {
  let component: Pa3Component;
  let fixture: ComponentFixture<Pa3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
