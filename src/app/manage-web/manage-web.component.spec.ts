import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWebComponent } from './manage-web.component';

describe('ManageWebComponent', () => {
  let component: ManageWebComponent;
  let fixture: ComponentFixture<ManageWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
