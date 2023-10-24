import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  list = [
    { title: 'Post a Job', icon: 'pi pi-bell', route: '/company/post-job' },
    { title: 'Open Jobs', icon: 'pi pi-bars', route: '/company/applied-jobs' },
    { title: 'Search Candidates', icon: 'pi pi-search', route: '/company/search-candidate' },
    // { title: 'Closed Jobs', icon: 'pi pi-book', route: '/main/add-interview' },
    // { title: 'Edit Company Profile', icon: 'pi pi-user', route: '/main/profile' },
  ];
  isActive: number = 0;

  working(i: number) {
    console.log('index is : ', i);
  }
}
