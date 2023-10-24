import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ApplyJobsService } from 'src/app/services/applyJobs.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-job-notifications',
  templateUrl: './job-notifications.component.html',
  styleUrls: ['./job-notifications.component.css']
})
export class JobNotificationsComponent {
  activeIndex: number = 0;
  cards: number[] = [1, 2, 3];
  jobs: any[] = [];
  filter: any[] = [];
  candidateId: string = "";
  visible: boolean = false;

  constructor(
    private userService: UserService,
    private applyJobsService: ApplyJobsService,
    private messageService: MessageService
  ) {
    const user = localStorage.getItem('user');
    if (user) {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      this.candidateId = user._id;
    }
  }

  ngOnInit() {
    this.userService.getShortListedCandidates(this.candidateId).subscribe((appliedJobs: any) => {
      console.log('all applied jobs', appliedJobs);
      if (!appliedJobs.err) {
        this.jobs = appliedJobs.doc;
      } else {
        this.jobs = []
      }
    })
  }

  handleApplyJob = (jobId: string) => {
    this.applyJobsService.applyJob(jobId, this.candidateId).subscribe((data: any) => {
      console.log('data', data);
      this.messageService.add({ severity: 'success', summary: 'Applied Successfully', detail: 'User Applied for this job successfully' });
    })
  }

  showDialog() {
    this.visible = true;
  }

  handlePanelChange(event: any) {
    console.log(event);
    this.activeIndex = event;
    this.jobs = [];
    if (this.activeIndex === 0) {
      this.userService.getShortListedCandidates(this.candidateId).subscribe((appliedJobs: any) => {
        console.log('applied jobs', appliedJobs);
        if (!appliedJobs.err) {
          console.log('all short listed candidates', appliedJobs);
          this.jobs = appliedJobs.doc;
        }
        else if (appliedJobs.message == 'Failed') {
          this.jobs = [];
        }
      })
    }
    else if (this.activeIndex === 1) {
      this.userService.getFinalShortListedCandidates(this.candidateId).subscribe((appliedJobs: any) => {
        console.log('final short listed jobs', appliedJobs);
        if (!appliedJobs.err) {
          this.jobs = appliedJobs.doc
        }
        else if (appliedJobs.message == 'Failed') {
          this.jobs = [];
        }
      })
    } else if (this.activeIndex === 2) {
      this.userService.getInterviewScheduledCandidates(this.candidateId).subscribe((appliedJobs: any) => {
        console.log('interview jobs', appliedJobs);
        if (!appliedJobs.err) {
          this.jobs = appliedJobs.doc
        }
        else if (appliedJobs.message == 'Failed') {
          this.jobs = [];
        }
      })
    } else if (this.activeIndex === 3) {
      this.userService.getAllJobs(this.candidateId).subscribe((jobs: any) => {
        console.log('all jobs', jobs);
        this.jobs = jobs.doc;
      });
    }
  }
}
