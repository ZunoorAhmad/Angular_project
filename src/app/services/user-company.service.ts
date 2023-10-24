import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const endpoint = 'https://careerapis.tech-east.com.pk/company';

@Injectable({
  providedIn: 'root'
})
export class UserCompanyService {

  constructor(
    private http: HttpClient
  ) { }

  getInterviewScheduledCandidates(candidateId: any): Observable<any> {
    console.log(endpoint + `/interviewshortlist${candidateId}`)
    return this.http.get(endpoint + `/interviewshortlist${candidateId}`);
  }

  getShortListedCandidates(candidateId: any): Observable<any> {
    console.log(endpoint + `/shortListCandidate${candidateId}`)
    return this.http.get(endpoint + `/shortListCandidate${candidateId}`);
  }

  getFinalShortListedCandidates(candidateId: any): Observable<any> {
    console.log(endpoint + `/finalShortlist${candidateId}`)
    return this.http.get(endpoint + `/finalShortlist${candidateId}`);
  }

  getAllJobs(): Observable<any> {
    return this.http.get('https://careerapis.tech-east.com.pk/job' + '/AllJobs');
  }

}
