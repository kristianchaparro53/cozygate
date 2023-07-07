import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaContraPage } from './nueva-contra.page';

describe('NuevaContraPage', () => {
  let component: NuevaContraPage;
  let fixture: ComponentFixture<NuevaContraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
