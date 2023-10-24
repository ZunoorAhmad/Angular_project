import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user: any = {};

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

}
