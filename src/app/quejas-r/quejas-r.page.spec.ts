import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuejasRPage } from './quejas-r.page';

describe('QuejasRPage', () => {
  let component: QuejasRPage;
  let fixture: ComponentFixture<QuejasRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuejasRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
