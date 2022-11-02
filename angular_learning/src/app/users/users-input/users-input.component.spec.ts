import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInputComponent } from './users-input.component';

describe('UsersInputComponent', () => {
  let component: UsersInputComponent;
  let fixture: ComponentFixture<UsersInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
