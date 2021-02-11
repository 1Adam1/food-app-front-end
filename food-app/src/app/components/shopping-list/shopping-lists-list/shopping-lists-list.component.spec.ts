import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListsListComponent } from './shopping-lists-list.component';

describe('ShoppingListsListComponent', () => {
  let component: ShoppingListsListComponent;
  let fixture: ComponentFixture<ShoppingListsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
