import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestrComponent } from './testr.component';

describe('TestrComponent', () => {
  let component: TestrComponent;
  let fixture: ComponentFixture<TestrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
