import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag8Component } from './pag8.component';

describe('Pag8Component', () => {
  let component: Pag8Component;
  let fixture: ComponentFixture<Pag8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pag8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
