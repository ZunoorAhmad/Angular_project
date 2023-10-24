import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Company21Component } from './company/company2/company2.1/company2.1.component';
import { Company22Component } from './company/company2/company2.2/company2.2.component';
import { Company221Component } from './company/company2/company2.21/company2.21.component';
import { User2Component } from './user/user2/user2.component';
import { User21Component } from './user/user2/user2.1/user2.1.component';
import { User22Component } from './user/user2/user2.2/user2.2.component';
import { User3Component } from './user/user3/user3.component';
import { User4Component } from './user/user4/user4.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { User1Component } from './user/user1/user1.component';
import { CompanyComponent } from './company/company/company.component';
import { Company1Component } from './company/company1/company1.component';
import { Company2Component } from './company/company2/company2.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { RatingModule } from 'primeng/rating';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    User1Component,
    CompanyComponent,
    Company1Component,
    Company2Component,
    Company21Component,
    Company22Component,
    Company221Component,
    User2Component,
    User21Component,
    User22Component,
    User3Component,
    User4Component,
    MainHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ButtonModule,
    ToastModule,
    AvatarModule,
    CardModule,
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    TabViewModule,
    FileUploadModule,
    BrowserAnimationsModule,
    CalendarModule,
    RatingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
