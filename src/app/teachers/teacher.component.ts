import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '@interfaces/teacher.interface';
import { TeacherService } from '@services/teachers.service';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <div> Template Works!!!</div>
    {{teacher}}
    @if(teacher) {
      <div> {{teacher | json}} </div>
    }
  `
})
export class TeacherComponent implements OnInit {

  teacher!: Teacher;
  private readonly _router = inject(Router)
  constructor(private activatedRoute: ActivatedRoute) { }


  async ngOnInit(): Promise<void> {
    this.teacher = this.activatedRoute.snapshot.data['teacher']
    if (this.teacher == null) {
      this._router.navigate(['teachers']);
    }
  }

}
