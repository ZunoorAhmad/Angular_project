import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { DataView } from "primeng/dataview";

@Component({
  selector: 'app-search-candidate',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.css']
})
export class SearchCandidateComponent {
sortOptions: any[]|undefined;

  constructor(
    private companyService: CompanyService
  ) { }

  searchForm = new FormGroup({
    applicant_education: new FormControl("", Validators.required),
    applicant_skills: new FormControl("", Validators.required),
    applicant_experience: new FormControl("", Validators.required),
    applicant_location: new FormControl("", Validators.required),
  });
  cities: any[] = ['Lahore', 'Multan', 'Faisalabad', 'Islamabad', 'Karachi', 'Rawalpindi'];
  users: any[] = [];
  sortOrder: number = 0;
	sortField: string = "";

  submitForm() {
    console.log(this.searchForm.value);
    let data = this.searchForm.value;
    this.companyService.searchUsers(data).subscribe((users:any) => {
      this.users = users;
      console.log(users);
    })
  }

  get formControl() {
    return this.searchForm.controls;
  }

  onSortChange(event:any) {
		const value = event.value;
		if (value.indexOf("!") === 0) {
			this.sortOrder = -1;
			this.sortField = value.substring(1, value.length);
		} else {
			this.sortOrder = 1;
			this.sortField = value;
		}
	}

  onFilter(dv: DataView, event: Event) {
		dv.filter((event.target as HTMLInputElement).value);
	}

}
