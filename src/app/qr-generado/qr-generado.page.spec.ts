import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrGeneradoPage } from './qr-generado.page';

describe('QrGeneradoPage', () => {
  let component: QrGeneradoPage;
  let fixture: ComponentFixture<QrGeneradoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrGeneradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
