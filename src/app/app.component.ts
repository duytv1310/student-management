import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';
import { ServerhttpService } from './services/serverhttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'APP';

  totalStudents = 0

  constructor(private common : CommonService, private serverHttp:ServerhttpService){}

  ngOnInit(): void {
    if(this.common.totalStudents===0){
      this.serverHttp.getStudent().subscribe(data=>{
        this.totalStudents=Object.keys(data).length
      })
    }


   this.common.totalStudents$.subscribe(total=>{
     this.totalStudents = total
   })
  }
  
}
