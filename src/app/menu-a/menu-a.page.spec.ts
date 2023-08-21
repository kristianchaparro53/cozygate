import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuAPage } from './menu-a.page';

describe('MenuAPage', () => {
  let component: MenuAPage;
  let fixture: ComponentFixture<MenuAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
