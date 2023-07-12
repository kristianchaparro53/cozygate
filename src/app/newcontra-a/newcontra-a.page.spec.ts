import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewcontraAPage } from './newcontra-a.page';

describe('NewcontraAPage', () => {
  let component: NewcontraAPage;
  let fixture: ComponentFixture<NewcontraAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewcontraAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
