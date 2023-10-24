// create a service to handle authentication
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const endpoint = 'https://careerapis.tech-east.com.pk/company';

@Injectable({
    providedIn: 'root'
})

export class CompanyService {

    constructor(
        private http: HttpClient
    ) { }

    //post a job
    postJob(job: any): Observable<any> {
        return this.http.post(endpoint + '/postJob', job);
    }

    //get all applied candidates
    getAppliedCandidates(companyId: any): Observable<any> {
        console.log(endpoint + `/allAppliedCandidates${companyId}`);
        return this.http.get(endpoint + `/allAppliedCandidates${companyId}`);
    }

    //get all short listed candidates
    getShortListedCandidates(companyId: any): Observable<any> {
        console.log(endpoint + `/getcompanyshortlistedcandidatesUpdated${companyId}`);
        return this.http.get(endpoint + `/getcompanyshortlistedcandidatesUpdated${companyId}`);
    }

    //get all final short listed candidates
    getFinalShortListedCandidates(companyId: any): Observable<any> {
        console.log(endpoint + `/finalShortlistedCandidatesForCompany${companyId}`);
        return this.http.get(endpoint + `/fshortlistedCandidates${companyId}`);
    }

    //get all interview scheduled candidates
    getInterviewScheduledCandidates(companyId: any): Observable<any> {
        return this.http.get(endpoint + `/getcompanyInterviewCandidatesUpdated${companyId}`);
    }

    // shortlist candidate
    shortListCandidate(data: any): Observable<any> {
        return this.http.post(endpoint + '/shortlistTheCandidate', data);
    }

    // final shortlist candidate
    finalShortListCandidate(data: any): Observable<any> {
        return this.http.post(endpoint + '/FinalShortlistTheCandidate', data);
    }

    // schedule interview
    scheduleInterview(data: any): Observable<any> {
        return this.http.post(endpoint + '/CallForInterviewTheCandidate', data);
    }

    searchUsers(data: any) {
        console.log(data);
        console.log(typeof(data));
        return this.http.post('http://localhost:8000/recommend', data);
    }
}
