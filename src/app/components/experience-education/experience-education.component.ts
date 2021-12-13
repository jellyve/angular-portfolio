import { Component, Input, OnInit } from '@angular/core';
import { Resume, Experience } from 'src/app/models/resume';

@Component({
  selector: 'app-experience-education',
  templateUrl: './experience-education.component.html',
  styleUrls: ['./experience-education.component.css']
})
export class ExperienceEducationComponent implements OnInit {
  @Input() expEduList!:Experience[];

  constructor() { }

  eduTest(testString:string): boolean{
    if(testString==="edu"){
      return true;
    }
    else{
      return false;
    }
  }
  proTest(testString:string): boolean{
    if(testString==="pro"){
      return true;
    }
    else{
      return false;
    }
  }

  ngOnInit(): void {
  }

}
