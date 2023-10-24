import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  // login method
  login(data: any) {
    this.authService.login(data).subscribe((res: any) => {
      if (res?.message === 'Success') {
        const user = res.doc;
        localStorage.setItem('user', JSON.stringify(user));
        if (user.userType === 'User') {
          this.router.navigate(['/main']);
          this.messageService.add({ severity: 'success', summary: 'User Logged In', detail: 'User Logged In Successfully' });
        } else if (user.userType === 'Company') {
          this.messageService.add({ severity: 'success', summary: 'Company Logged In', detail: 'Company Logged In Successfully' });
          this.router.navigate(['/company']);
        }
      }
    }, (err) => {
      console.log('err', err);
    });
  }

  onSubmit() {
    this.login(this.loginForm.value);
  }

  // email getter method
  get email() {
    return this.loginForm.get('email')?.value;
  }

  // password getter method
  get password() {
    return this.loginForm.get('password')?.value;
  }

}