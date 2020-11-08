import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag9Component } from './pag9.component';

describe('Pag9Component', () => {
  let component: Pag9Component;
  let fixture: ComponentFixture<Pag9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pag9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
