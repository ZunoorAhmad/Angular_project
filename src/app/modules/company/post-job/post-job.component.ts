import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent {
  jobType: {
    name: string;
  }[] = [
      { name: 'Part time' }, { name: 'Full time' }];

  jobMode: {
    name: string;

  }[] = [
      { name: 'On Site' }, { name: 'Remote' }, { name: 'Hybrid' }];


  constructor(
    private companyService: CompanyService,
    private messageService: MessageService
  ) { }


  jobForm = new FormGroup({
    title: new FormControl(''),
    employmentType: new FormControl(''),
    description: new FormControl(''),
    requirements: new FormControl(''),
    location: new FormControl(''),
    salary: new FormControl(0),
    postedBy: new FormControl(JSON.parse(localStorage.getItem('user') || '')._id || ''),
    deadline: new FormControl(new Date(new Date().getDate() + 7)),
    jobType: new FormControl(''),
  });


  handleEmploymentTypeChange(event: any) {
    this.jobForm.patchValue({
      employmentType: event.value.name
    });
  }


  handleJobTypeChange(event: any) {

    this.jobForm.patchValue({
      jobType: event.value.name
    });
  }


  onSubmit() {
    console.log(this.jobForm.value);

    this.companyService.postJob(this.jobForm.value).subscribe((res) => {
      console.log('Job Posted Successfully', res);
      this.messageService.add({ severity: 'success', summary: 'Job Created', detail: 'Job Created Successfully' });
    });

  }


}
