import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User22Component } from './user2.2.component';

describe('User22Component', () => {
  let component: User22Component;
  let fixture: ComponentFixture<User22Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [User22Component]
    });
    fixture = TestBed.createComponent(User22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
