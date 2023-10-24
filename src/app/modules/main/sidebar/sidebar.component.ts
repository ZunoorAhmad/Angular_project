import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  list = [
    { title: 'Job Notification', icon: 'pi pi-bell', route: '/main/job-notification' },
    { title: 'Applied Jobs', icon: 'pi pi-bars', route: '/main/applied-jobs' },
    { title: 'Add Interview', icon: 'pi pi-book', route: '/main/add-interview' },
    { title: 'Edit Profile', icon: 'pi pi-user', route: '/main/profile' },
  ];
  isActive: number = 0;

  working(i:number){
    console.log('index is : ',i);
  }

}
