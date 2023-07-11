import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroResidentesPage } from './registro-residentes.page';

describe('RegistroResidentesPage', () => {
  let component: RegistroResidentesPage;
  let fixture: ComponentFixture<RegistroResidentesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroResidentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
