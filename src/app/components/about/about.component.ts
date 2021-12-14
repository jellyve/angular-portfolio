import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private _jsonURL = 'assets/projects.json';
  projectList: Project[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Project[]>(this._jsonURL).subscribe((data) => {
      this.projectList = data;
      // console.log('--- result :: ',  this.projectList);
    });
  }

}
