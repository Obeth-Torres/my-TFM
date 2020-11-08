import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationCap3Component } from './pagination-cap3.component';

describe('PaginationCap3Component', () => {
  let component: PaginationCap3Component;
  let fixture: ComponentFixture<PaginationCap3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationCap3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationCap3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
