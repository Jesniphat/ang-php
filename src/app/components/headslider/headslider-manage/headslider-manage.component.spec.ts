import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsliderManageComponent } from './headslider-manage.component';

describe('HeadsliderManageComponent', () => {
  let component: HeadsliderManageComponent;
  let fixture: ComponentFixture<HeadsliderManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadsliderManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadsliderManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
