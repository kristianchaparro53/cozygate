import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAPage } from './registro-a.page';

describe('RegistroAPage', () => {
  let component: RegistroAPage;
  let fixture: ComponentFixture<RegistroAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
