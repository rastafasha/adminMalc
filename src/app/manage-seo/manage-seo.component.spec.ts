import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSeoComponent } from './manage-seo.component';

describe('ManageSeoComponent', () => {
  let component: ManageSeoComponent;
  let fixture: ComponentFixture<ManageSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
