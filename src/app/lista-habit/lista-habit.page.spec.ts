import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaHabitPage } from './lista-habit.page';

describe('ListaHabitPage', () => {
  let component: ListaHabitPage;
  let fixture: ComponentFixture<ListaHabitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaHabitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
