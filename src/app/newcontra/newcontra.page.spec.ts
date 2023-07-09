import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewcontraPage } from './newcontra.page';

describe('NewcontraPage', () => {
  let component: NewcontraPage;
  let fixture: ComponentFixture<NewcontraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewcontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
