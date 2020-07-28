import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGraficoComponent } from './manage-grafico.component';

describe('ManageGraficoComponent', () => {
  let component: ManageGraficoComponent;
  let fixture: ComponentFixture<ManageGraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
