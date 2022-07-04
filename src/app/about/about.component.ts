import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/Hero';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(
    
  ) {}
  ngOnInit(): void {}
  
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  hero = new Hero();

  submitted = false;

  onSubmit() { this.submitted = true; }

  
  
}
