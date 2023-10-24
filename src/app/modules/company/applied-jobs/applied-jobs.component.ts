import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent {

  activeIndex: number = 0;
  candidates: any[] = [];
  userId: string = '';
  visible: boolean = false;

  constructor(
    private companyService: CompanyService,
    private router: Router
  ) {
    this.userId = JSON.parse(localStorage.getItem('user') || '')._id || '';
  }

  ngOnInit(): void {
    console.log('oninit');
    this.companyService.getAppliedCandidates(this.userId).subscribe((res) => {
      console.log('applied candidate are : ', res);
      this.candidates = res;
    });

  }

  handleClickView(userId: string, jobId: any) {
    console.log(jobId)
    this.router.navigate(['/company/detailed-candidate'], { queryParams: { userId: userId, jobId: jobId._id } });
  }


  handleTabChange(index: number) {
    console.log('User Id is : ', this.userId);
    this.candidates = [];
    console.log('index is : ', index);
    this.activeIndex = index;
    console.log(this.userId);

    if (this.activeIndex === 0) {
      this.companyService.getAppliedCandidates(this.userId).subscribe((res) => {
        console.log('applied candidates', res);
        this.candidates = res;
      });
    }

    else if (this.activeIndex === 1) {
      this.companyService.getShortListedCandidates(this.userId).subscribe((res) => {
        console.log('shortListed candidates', res);
        this.candidates = res;
        console.log(this.candidates);
      }
      );
    }

    else if (this.activeIndex === 2) {
      this.companyService.getFinalShortListedCandidates(this.userId).subscribe((res) => {
        console.log('fshortListed final candidates', res.doc);
        this.candidates = res.doc;
      }
      );
    }

    else if (this.activeIndex === 3) {
      this.companyService.getInterviewScheduledCandidates(this.userId).subscribe((res) => {
        console.log('interview candidates : ', res);
        this.candidates = res;
      }
      );
    }



  }






}
