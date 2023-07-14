import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroUPage } from './registro-u.page';

describe('RegistroUPage', () => {
  let component: RegistroUPage;
  let fixture: ComponentFixture<RegistroUPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
