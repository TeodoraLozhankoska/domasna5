import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course, suzi } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  constructor() { }

  @Input()
  title:string="";
  @Input()
  crs:Course=suzi;

  @Output()
  message=new EventEmitter<Course>();

  onCrsViewed(){
    this.message.emit(this.crs);
  }

  styleTitle(){
    return{'font-weight':'bolder'}
  }

  styleDesc(){
    return{'font-style' : 'italic'}
  }


  ngOnInit(){

  }
}
