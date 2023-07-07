import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialResidentePage } from './historial-residente.page';

describe('HistorialResidentePage', () => {
  let component: HistorialResidentePage;
  let fixture: ComponentFixture<HistorialResidentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistorialResidentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
