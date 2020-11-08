import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa8Component } from './pa8.component';

describe('Pa8Component', () => {
  let component: Pa8Component;
  let fixture: ComponentFixture<Pa8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
