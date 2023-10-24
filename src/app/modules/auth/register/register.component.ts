import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  profileForm = new FormGroup({
    fName: new FormControl(''),
    lName: new FormControl(''),
    userType: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  submit() {
    console.log('dads', this.profileForm.value);
    this.authService.signup(this.profileForm.value).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('user', JSON.stringify(res.doc));
      // this.router.navigate(['/main']);
      // this.messageService.add({ severity: 'success', summary: 'User Created', detail: 'User Logged In Successfully' });
      if (this.profileForm.value.userType === 'User') {
        this.router.navigate(['/main']);
        this.messageService.add({ severity: 'success', summary: 'User Created', detail: 'User Logged In Successfully' });
      } else if (this.profileForm.value.userType === 'Company') {
        this.router.navigate(['/company']);
        this.messageService.add({ severity: 'success', summary: 'Company Created', detail: 'Company Logged In Successfully' });
      }
    });
  }

}
