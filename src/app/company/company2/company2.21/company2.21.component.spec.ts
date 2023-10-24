import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Company221Component } from './company2.21.component';

describe('Company221Component', () => {
  let component: Company221Component;
  let fixture: ComponentFixture<Company221Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Company221Component]
    });
    fixture = TestBed.createComponent(Company221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
