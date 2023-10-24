import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Company22Component } from './company2.2.component';

describe('Company22Component', () => {
  let component: Company22Component;
  let fixture: ComponentFixture<Company22Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Company22Component]
    });
    fixture = TestBed.createComponent(Company22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
