import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Company21Component } from './company2.1.component';

describe('Company21Component', () => {
  let component: Company21Component;
  let fixture: ComponentFixture<Company21Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Company21Component]
    });
    fixture = TestBed.createComponent(Company21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
