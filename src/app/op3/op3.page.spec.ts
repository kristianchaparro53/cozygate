import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Op3Page } from './op3.page';

describe('Op3Page', () => {
  let component: Op3Page;
  let fixture: ComponentFixture<Op3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Op3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
