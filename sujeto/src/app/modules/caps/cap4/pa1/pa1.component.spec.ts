import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa1Component } from './pa1.component';

describe('Pa1Component', () => {
  let component: Pa1Component;
  let fixture: ComponentFixture<Pa1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
