import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginModalComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
