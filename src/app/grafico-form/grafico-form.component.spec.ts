import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoFormComponent } from './grafico-form.component';

describe('GraficoFormComponent', () => {
  let component: GraficoFormComponent;
  let fixture: ComponentFixture<GraficoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
