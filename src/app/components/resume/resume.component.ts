import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Resume, Experience } from 'src/app/models/resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume: Resume = {
    "objective": "",
    "langEnv": [],
    "skills": [],
    "expEdu": [],
    "awards": []
  };
  private _jsonURL = 'assets/resume.json';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Resume>(this._jsonURL).subscribe((data) => {
      this.resume = data;
      console.log('--- result :: ',  this.resume);
    });
  }

}
