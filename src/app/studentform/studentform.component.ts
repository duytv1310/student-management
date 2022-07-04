import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from '../model/Student';
import { CommonService } from '../services/common.service';
import { ServerhttpService } from '../services/serverhttp.service';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css'],
})
export class StudentformComponent implements OnInit {
  public student = new Student();
  id:number=0
  

  public saveAndBacktoList(student:Student) {
    if (this.id > 0) {
      this.serverHttp
        .updateStudent(this.id, this.student)
        .subscribe((data) => {});
    } else
      this.serverHttp.addStudent(this.student).subscribe((data) => {});
    this.router.navigate(['/students']);
  }

  public save(student:Student) {
    if (this.id > 0) {
      this.serverHttp
        .updateStudent(this.id, this.student)
        .subscribe((data) => {});
    } else
      this.serverHttp.addStudent(this.student).subscribe((data) => {
        this.common.incrementStudent();
      });

  }

  private loadData(id: number) {
    this.serverHttp.getStudentDetails(id).subscribe((data) => {
     Object.assign(this.student,data)
    });
  }

  public randomStudent(form:any) {
    this.serverHttp.getRandomStudent().subscribe((data:any) => {
      console.log(data.results)
      if (data && data.results && data.results.length > 0) {
        const student=data.results[0]
        this.student.firstName=student.name.first
        this.student.lastName=student.name.last
        this.student.gender=student.gender
        this.student.dob=student.dob.date.slice(0,10)
        this.student.email=student.email
        this.student.phone=student.cell
        this.student.picture=student.picture.medium
      }
    });
  }

  constructor(
    private serverHttp: ServerhttpService,
    private router: Router,
    private route: ActivatedRoute,
    private common: CommonService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id > 0) this.loadData(this.id);
    // console.log(id)
  }
}
