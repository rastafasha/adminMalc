import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagevideoComponent } from './manage-video.component';

describe('ManagevideoComponent', () => {
  let component: ManagevideoComponent;
  let fixture: ComponentFixture<ManagevideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagevideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
