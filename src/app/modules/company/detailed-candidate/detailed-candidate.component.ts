import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyService } from 'src/app/services/company.service';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-detailed-candidate',
  templateUrl: './detailed-candidate.component.html',
  styleUrls: ['./detailed-candidate.component.css']
})
export class DetailedCandidateComponent {

  jobId: string = '';
  userId: string = '';
  user: any = {};

  // completeProfileForm = new FormGroup({
  //   fName: new FormControl(''),
  //   lName: new FormControl(''),
  //   phoneNumber: new FormControl(467589087897867),
  //   email: new FormControl(''),
  // });

  constructor(
    private companyService: CompanyService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private fileService: FileService,
    private messageService: MessageService,
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.jobId = params['jobId'];
      this.userId = params['userId'];
    });
  }

  ngOnInit(): void {
    this.authService.getUserProfile(this.userId).subscribe((res) => {
      console.log(res);
      console.log(res.doc);
      if (res?.message === 'Success') {
        this.user = res?.doc;
        console.log(res.doc.fName);
        console.log(res.doc.lName);
        // this.completeProfileForm.controls.fName = res?.doc?.fName;
        // this.completeProfileForm.controls.lName = res?.doc?.lName;
        // this.completeProfileForm.controls.email = res?.doc?.email;
        // this.completeProfileForm.controls.phoneNumber = res?.doc?.phone;
      }
    });
  }

  goToLinkedIn() {
    console.log('function working');
    window.location.href = "http://www.linkedin.com";
  }

  handlePressShortList() {
    console.log(this.userId, this.jobId);

    // this.companyService.shortListCandidate({ user: this.userId, jobId: this.jobId }).subscribe((res) => {
    //   console.log(res);
    //   if (res.message == 'Success') {
    //     this.messageService.add({ severity: 'success', summary: 'Candidate ShortListed', detail: 'Candidate ShortListed successfully' });
    //   }
    // });
  }

  handlePressFinalShortList() {
    console.log(this.userId, this.jobId);
    // this.companyService.finalShortListCandidate({ user: this.userId, jobId: this.jobId }).subscribe((res) => {
    //   console.log(res);
    //   if (res.message == 'Success') {
    //     this.messageService.add({ severity: 'success', summary: 'Candidate Final ShortListed', detail: 'Candidate Final ShortListed successfully' });
    //   }
    // });
  }

  handlePressScheduleInterview() {
    const currentDate = new Date();
    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + 5);
    console.log(this.userId, this.jobId)
    this.companyService.scheduleInterview({ user: this.userId, jobId: this.jobId, interviewDate: futureDate }).subscribe((res) => {
      console.log(res);
      if (res.message == 'Success') {
        this.messageService.add({ severity: 'success', summary: 'Interview Sheduled', detail: 'Interview has been sheduled 5 days later' });
      }
    });
  }

  handleDownloadFile() {
    console.log("callling download file")
    console.log(this.user?.Curriculumvitae[0]);
    this.fileService.downloadFile(this.user?.Curriculumvitae[0] || '');
    if (!this.user?.Curriculumvitae[0]) {
      alert('No CV uploaded yet');
      return
    }
  };
}
