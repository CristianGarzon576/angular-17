import { Component, OnInit, inject } from '@angular/core';
import { CardTeacherComponent } from '@app/card-teacher/card-teacher.component';
import { Teacher } from '@interfaces/teacher.interface';
import { TeacherService } from '@services/teachers.service';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [CardTeacherComponent],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent implements OnInit {

  teacherService = inject(TeacherService);
  teachers: Teacher[] = [];

  async ngOnInit(): Promise<void> {
    this.teachers = await this.teacherService.getTeachers()
  }
}
