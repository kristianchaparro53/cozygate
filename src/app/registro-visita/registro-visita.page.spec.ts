import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroVisitaPage } from './registro-visita.page';

describe('RegistroVisitaPage', () => {
  let component: RegistroVisitaPage;
  let fixture: ComponentFixture<RegistroVisitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroVisitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
