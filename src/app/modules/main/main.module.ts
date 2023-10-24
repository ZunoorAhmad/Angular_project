import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { JobNotificationsComponent } from './job-notifications/job-notifications.component';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ProfileComponent } from './profile/profile.component';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { TabViewModule } from 'primeng/tabview';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { CalendarModule } from 'primeng/calendar';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api/confirmationservice';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    JobNotificationsComponent,
    ProfileComponent,
    AddInterviewComponent,
    AppliedJobsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    TabViewModule,
    FileUploadModule,
    CalendarModule,
    DialogModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    JobNotificationsComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
