import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ApplyJobsService } from 'src/app/services/applyJobs.service';
import { JobService } from 'src/app/services/jobs.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent {
  cards: number[] = [1, 2, 3, 4, 5];
  visible: boolean = false;
  jobs: any[] = [];
  candidateId: string = "";
  description: string = '';
  requirments: string = '';

  constructor(
    private jobService: JobService,
    private applyJobsService: ApplyJobsService,
    private messageService: MessageService,
    private userService: UserService
  ) {
    const user = localStorage.getItem('user');

    if (user) {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      console.log();
      this.candidateId = user._id;
    }
  }

  ngOnInit() {
    this.jobService.getAllJobs().subscribe((data: any) => {
      this.jobs = data.doc;
      console.log(data.doc);
    });
  }


  handleApplyJob = (jobId: string) => {
    this.userService.getAllJobs(this.candidateId).subscribe((res) => {
      console.log(res);
      let arr = res.doc.find((ele: any) => ele.jobId._id === jobId);
      console.log(arr);
    })

    this.applyJobsService.applyJob(jobId, this.candidateId).subscribe((data: any) => {
      this.messageService.add({ severity: 'success', summary: 'Applied Successfully', detail: 'User Applied for this job successfully' });
    })
  }

  showDetails(job: any) {
    this.visible = true;
    console.log(job);
    this.description = job.description;
    this.requirments = job.requirments;
  }

}
