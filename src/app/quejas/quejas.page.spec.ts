import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuejasPage } from './quejas.page';

describe('QuejasPage', () => {
  let component: QuejasPage;
  let fixture: ComponentFixture<QuejasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuejasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
