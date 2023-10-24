import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const endpoint = 'https://careerapis.tech-east.com.pk/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getInterviewScheduledCandidates(candidateId: any): Observable<any> {
    console.log(endpoint + `/getInterviewShortlisted${candidateId}`)
    return this.http.get(endpoint + `/getInterviewShortlisted${candidateId}`);
  }

  getShortListedCandidates(candidateId: any): Observable<any> {
    console.log(endpoint + `/getShortlistedCandidate${candidateId}`)
    return this.http.get(endpoint + `/getShortlistedCandidate${candidateId}`);
  }

  getFinalShortListedCandidates(candidateId: any): Observable<any> {
    console.log(endpoint + `/getFinalShortlisted${candidateId}`)
    return this.http.get(endpoint + `/getFinalShortlisted${candidateId}`);
  }

  getAllJobs(candidateId:any): Observable<any> {
    return this.http.get(`https://careerapis.tech-east.com.pk/appliedjobs/allmMyjob${candidateId}`);
  }

}
