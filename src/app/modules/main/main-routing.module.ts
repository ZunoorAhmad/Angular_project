import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { JobNotificationsComponent } from './job-notifications/job-notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: AppliedJobsComponent,
        // component: ProfileComponent
        data: {
          isAcceptedOffers: false,
        }
      },
      {
        path: 'job-notification',
        // component: JobNotificationsComponent,
        component: AppliedJobsComponent,

        data: {
          isAcceptedOffers: false
        }
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'add-interview',
        component: AddInterviewComponent
      },
      {
        path: 'applied-jobs',
        component: JobNotificationsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
