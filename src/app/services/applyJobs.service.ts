// create a service to handle authentication
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const endpoint = 'https://careerapis.tech-east.com.pk/appliedjobs';

@Injectable({
    providedIn: 'root'
})

export class ApplyJobsService {
    constructor(private http: HttpClient) { }
    
    getAllAppliedJobs(candidateId: string): Observable<any> {
        return this.http.get(endpoint + `/allmMyjob${candidateId}`);
    }

    applyJob(jobId: string, candidateId: string): Observable<any> {
        return this.http.post(endpoint + '/applyJob', { jobId, candidateId });
    }

}
