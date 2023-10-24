// create a service to handle authentication
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const endpoint = 'https://careerapis.tech-east.com.pk/user';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http: HttpClient) { }

    // login method
    login(data: any): Observable<any> {
        return this.http.post(endpoint + '/login', data);
    }

    // signup method
    signup(data: any): Observable<any> {
        return this.http.post(endpoint + '/signupEmail', data);
    }

    // complete profile method
    completeProfile(data: any): Observable<any> {
        console.log(data);
        return this.http.post(endpoint + '/completeProfile', data);
    }

    // get user profile method
    getUserProfile(userId: string): Observable<any> {
        return this.http.get(endpoint + `/myProfile${userId}`);
    }


}

