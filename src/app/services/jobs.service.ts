// create a service to handle authentication
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const endpoint = 'https://careerapis.tech-east.com.pk/job';

@Injectable({
    providedIn: 'root'
})


export class JobService {

    constructor(private http: HttpClient) { }


    // get all jobs
    getAllJobs(): Observable<any> {
        return this.http.get(endpoint + '/AllJobs');
    }

    // get shortlisted jobs
    getShortlistedJobs(candidateId: string): Observable<any> {
        return this.http.get(endpoint + `/shortListCandidate${candidateId}`);
    }
    

    // get final shortlisted jobs
    getFinalShortlistedJobs(candidateId: string): Observable<any> {
        return this.http.get(endpoint + `/FinalShortlisted${candidateId}`);
    }

    // get interview jobs
    getInterviewJobs(candidateId: string): Observable<any> {
        return this.http.get(endpoint + `/Interview${candidateId}`);
    }

    // get interview dates
    getInterviewDates(candidateId: string): Observable<any> {
        return this.http.get(endpoint + `/dateinterview${candidateId}`);
    }

}