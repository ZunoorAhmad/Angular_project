import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCandidateComponent } from './detailed-candidate.component';

describe('DetailedCandidateComponent', () => {
  let component: DetailedCandidateComponent;
  let fixture: ComponentFixture<DetailedCandidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedCandidateComponent]
    });
    fixture = TestBed.createComponent(DetailedCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
