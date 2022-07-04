import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../model/Student';
import { CommonService } from '../services/common.service';
import { ServerhttpService } from '../services/serverhttp.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  public students: any;


  constructor(
    private serverHttp: ServerhttpService,
    private route: ActivatedRoute,
    private router: Router,
    private common: CommonService
  ) {}

  ngOnInit(): void {
    this.loadData()
  }

  public loadData() {
    this.serverHttp.getStudent().subscribe((data : any) => {
      this.common.setTotalStudents(data.length)
      this.students = data;
      
    });
  }

  public addStudent() {
    this.router.navigate(['studentform', 0]);
  }

  public removeStudent(studentId: number) {
    this.serverHttp.deleteStudent(studentId).subscribe((data) => {
      this.serverHttp.getStudent().subscribe((data) => {
        this.students = data;
        this.common.decrementStudent()
      });
    });
  }
  public getStudentDetails(studentId: number) {
    this.router.navigate(['/studentform/' + studentId]);
    this.serverHttp.getStudentDetails(studentId).subscribe((data) => {});
  }
}
