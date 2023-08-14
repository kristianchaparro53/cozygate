import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Op1Page } from './op1.page';

describe('Op1Page', () => {
  let component: Op1Page;
  let fixture: ComponentFixture<Op1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Op1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
