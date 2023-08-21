import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutosRPage } from './autos-r.page';

describe('AutosRPage', () => {
  let component: AutosRPage;
  let fixture: ComponentFixture<AutosRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AutosRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
