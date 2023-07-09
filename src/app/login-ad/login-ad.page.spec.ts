import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginAdPage } from './login-ad.page';

describe('LoginAdPage', () => {
  let component: LoginAdPage;
  let fixture: ComponentFixture<LoginAdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
