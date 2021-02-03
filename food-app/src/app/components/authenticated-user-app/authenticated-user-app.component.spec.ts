import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedUserAppComponent } from './authenticated-user-app.component';

describe('HomeComponent', () => {
  let component: AuthenticatedUserAppComponent;
  let fixture: ComponentFixture<AuthenticatedUserAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticatedUserAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatedUserAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
