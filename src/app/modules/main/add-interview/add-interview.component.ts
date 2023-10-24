import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.css']
})
export class AddInterviewComponent {
  selectedDate: Date = new Date();
  selectedDates: Array<Date> = []
  userId: string = '';

  constructor(private jobService: JobService) {

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    this.userId = user._id;

  }

  ngOnInit(): void {
    this.jobService.getInterviewDates(this.userId).subscribe((data: any) => {
      if (data?.message === 'Success') {
        this.selectedDates = data?.doc?.map((item: any) => {
          return item.interviewDate !== 'Default' ? new Date(item.interviewDate) : new Date();
        })
        console.log(this.selectedDates);
      }
    })

  }

  submit() {
    console.log(this.selectedDates);
  }



}
