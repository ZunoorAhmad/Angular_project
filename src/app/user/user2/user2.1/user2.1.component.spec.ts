import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User21Component } from './user2.1.component';

describe('User21Component', () => {
  let component: User21Component;
  let fixture: ComponentFixture<User21Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [User21Component]
    });
    fixture = TestBed.createComponent(User21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
