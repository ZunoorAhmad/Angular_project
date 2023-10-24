import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CompanyRoutingModule } from './company-routing.module';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from "primeng/dataview";
import { MainComponent } from './main/main.component';
import { MainModule } from '../main/main.module';
import { PostJobComponent } from './post-job/post-job.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DetailedCandidateComponent } from './detailed-candidate/detailed-candidate.component';
import { SearchCandidateComponent } from './search-candidate/search-candidate.component';

@NgModule({
  declarations: [
    AppliedJobsComponent,
    MainComponent,
    PostJobComponent,
    SideBarComponent,
    DetailedCandidateComponent,
    SearchCandidateComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    AvatarModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    TableModule,
    TabViewModule,
    DialogModule,
    DataViewModule,
    CompanyRoutingModule,
    DropdownModule,
    MainModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CompanyModule { }
