import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Op2Page } from './op2.page';

describe('Op2Page', () => {
  let component: Op2Page;
  let fixture: ComponentFixture<Op2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Op2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
