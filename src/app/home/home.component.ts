import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public name ;
  public age;
  public vehicles = ['car', 'bike', 'train', 'plane', 'moto'];

  constructor(private common: CommonService) {
    this.age = common.age;
    this.name = common.name

  }

  ngOnInit(): void {}

  public ageIncre() {
    this.common.age++;
    this.age = this.common.age;
  }
  public ageDecre() {
    this.common.age--;
    this.age = this.common.age
  }
  // public push() {
  //   this.vehicles.push(this.common.name + this.common.age);
  // }
  // public pop() {
  //   this.vehicles.pop();
  // }
}
