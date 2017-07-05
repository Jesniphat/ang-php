import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testr2Component } from './testr2.component';

describe('Testr2Component', () => {
  let component: Testr2Component;
  let fixture: ComponentFixture<Testr2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testr2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
