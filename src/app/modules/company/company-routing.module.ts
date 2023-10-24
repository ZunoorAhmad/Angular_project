import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { MainComponent } from './main/main.component';
import { PostJobComponent } from './post-job/post-job.component';
import { DetailedCandidateComponent } from './detailed-candidate/detailed-candidate.component';
import { SearchCandidateComponent } from './search-candidate/search-candidate.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: PostJobComponent
      },
      {
        path: 'applied-jobs',
        component: AppliedJobsComponent
      },
      {
        path: 'post-job',
        component: PostJobComponent
      },
      {
        path: 'detailed-candidate',
        component: DetailedCandidateComponent
      },
      {
        path: 'search-candidate',
        component: SearchCandidateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
