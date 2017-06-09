import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsliderListComponent } from './headslider-list.component';

describe('HeadsliderListComponent', () => {
  let component: HeadsliderListComponent;
  let fixture: ComponentFixture<HeadsliderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadsliderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadsliderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
